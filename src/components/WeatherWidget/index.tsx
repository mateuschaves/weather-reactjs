import { WidgetContainer, WidgetText } from "./styles";
import { FaTemperatureHigh, FaWind } from 'react-icons/fa';
import { GiWindsock } from 'react-icons/gi';
import { getWeatherCodeInterpretation } from '../../utils/getWeatherCodeInterpretation';

interface WeatherWidgetProps {
    temperature: number;
    windSpeed: number;
    location: string;
    weatherCode: number;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({
    temperature,
    windSpeed,
    location,
    weatherCode
}) => {
    return (
        <WidgetContainer>
            <WidgetText>Local: {location}</WidgetText>
            <WidgetText>
                <FaTemperatureHigh size={22} /> Temperatura: {temperature}&deg;C
            </WidgetText>
            <WidgetText>
                <FaWind size={22} /> Velocidade do Vento: {windSpeed} km/h
            </WidgetText>
            <WidgetText>
                <GiWindsock size={22} /> Previsão: {getWeatherCodeInterpretation(weatherCode)}
            </WidgetText>
        </WidgetContainer>
    );
};

export default WeatherWidget;