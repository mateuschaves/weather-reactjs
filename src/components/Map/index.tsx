import { MapContainer } from './styles'
import GoogleMapReact from 'google-map-react'
import { useTheme } from 'styled-components'
import { IoIosPin } from 'react-icons/io'
import { env } from '../../env'

type Props = {
    lat: number
    lng: number
    zoom: number
}

export default function Map({ lat, lng, zoom }: Props) {
    const theme = useTheme()
    return (
        <MapContainer>
            <GoogleMapReact
                defaultCenter={{
                    lat,
                    lng
                }}
                center={{
                    lat,
                    lng
                }}
                zoom={zoom}
                bootstrapURLKeys={{
                    key: env.VITE_GOOGLE_MAPS_API_KEY
                }}
            >
                <IoIosPin size={35} color={theme?.colors.redDark} />
            </GoogleMapReact>
        </MapContainer>
    )
}
