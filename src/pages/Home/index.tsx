import { useState } from "react"
import { useLocation } from "../../hooks/useLocation"
import toast from 'react-hot-toast';
import SearchBar from "../../components/SearchBar"
import Map from "../../components/Map"
import { ForecastAndGeocode, getForecast } from "../../services/api"
import WeatherWidget from "../../components/WeatherWidget";
import { getLocationName } from "../../utils/get-location-name";

function Home() {
    const { location, setZoom } = useLocation()

    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(false);
    const [forecast, setForecast] = useState<ForecastAndGeocode>();

    async function handleSearch() {
        setLoading(true)
        getForecast(searchText)
            .then(({ data }) => {
                setForecast(data)
                setZoom(17)
            })
            .catch(() => toast.error('Não foi possível obter a previsão do tempo para esse endereço 😭', {
                position: 'bottom-center',
            }))
            .finally(() => setLoading(false))
    }

    return (
        <div>
            <Map
                lat={Number(forecast?.geocode.lat) || location?.coordinates.lat}
                lng={Number(forecast?.geocode.lon) || location?.coordinates.lng}
                zoom={location.zoom}
            />
            <SearchBar
                onSearch={handleSearch}
                searchText={searchText}
                setSearchText={setSearchText}
                loading={loading}
            />
            {forecast && <WeatherWidget
                location={getLocationName(forecast?.geocode)}
                temperature={Number(forecast?.forecast.current_weather.temperature)}
                windSpeed={Number(forecast?.forecast.current_weather.windspeed)}
                weatherCode={Number(forecast?.forecast.current_weather.weathercode)}
            />}
        </div>
    )
}

export default Home
