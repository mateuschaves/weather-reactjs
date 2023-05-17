import { GeocodeModel } from "../models/geocode.model";

export function getLocationName(geocode: GeocodeModel) {
    const { display_name } = geocode;
    const [ city ] = display_name.split(", ");
    return city
}