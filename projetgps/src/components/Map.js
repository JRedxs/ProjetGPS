import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet';
import '../styles/Map.css';



const Map = () => {

    return(
        <>
            <button className="btn btn-primary"> test function </button>
            <div className="map-wrap">
                <div className="card card-map">
                    
                    <MapContainer center={[50.6422677679524, 3.061675967234328]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[50.6422677679524, 3.061675967234328]}>
                            <Popup>
                                Localisation par défault <br /> Campus EPSI Lille.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </>
    )
}

export default Map;