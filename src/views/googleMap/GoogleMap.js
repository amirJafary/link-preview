import GoogleMapReact from 'google-map-react';
import { useState } from 'react';

const AnyReactComponent = () => <div><i className="fa-solid text-4xl text-red-700 fa-location-crosshairs"></i></div>;

const GoogleMap = () => {

    const [marker, setMarker] = useState({ lng: 51.42982178019496, lat: 35.69420361932442, zoom: 11 })

    const markerChanged = (e) => {
        setMarker({
            lng: e.lng,
            lat: e.lat,
        })
    }

    return (
        <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyAMtYrcGGhBqB6CJ6NgajE_Q3VbTImgr58" }}
            center={[marker.lat, marker.lng]}
            onClick={markerChanged}
            zoom={marker.zoom}>
            <AnyReactComponent
                lat={marker.lat}
                lng={marker.lng}
            />
        </GoogleMapReact>
    );
}

export default GoogleMap;