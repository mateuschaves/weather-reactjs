import { useState, useEffect } from 'react';


export const useLocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: -0.516089, lng: -1.121460 },
        zoom: 1
    });

    const setZoom = (zoom: number) => {
        setLocation(prev => ({
            ...prev,
            zoom
        }));
    };

    const onSuccess = (location: any) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            },
            zoom: 15
        });
    };

    const onError = () => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: 0,
                lng: 0
            },
            zoom: 15
        });
    };

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError();
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError, {
            maximumAge: 86400000,
            enableHighAccuracy: false,
        });
    }, []);

    return {location, setZoom};
}