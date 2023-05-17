import axios from 'axios'
import { GeocodeModel } from '../models/geocode.model'
import { ForecastModel } from '../models/forecast.model'

const api = axios.create({
    baseURL: 'https://weather-fastify.onrender.com'
})

export type ForecastAndGeocode = {
    forecast: ForecastModel
    geocode: GeocodeModel
}

function getForecast(address: string) {
    return api.get<ForecastAndGeocode>('/forecast', {
        params: {
            address
        }
    })
}

export {
    getForecast,
}