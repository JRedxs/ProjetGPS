import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet';
import '../styles/Map.css';


const Map = () => {

    // function event(){
    //     const testEvent = useMapEvents('click', () => {
    //         map.setCenter([48.853172548812225, 2.349802258845999])
    //     })
    //     return null
    // }
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
                            A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </>
    )
}

export default Map;