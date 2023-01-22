import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet';

import '../styles/Map.css';



const Map = (props) => {

     const LillePosition = [50.629250, 3.057256]

    return (
        <>
            <div className="map-wrap">
                <div className="card card-map">

                    <MapContainer center={LillePosition} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        {/* {filteredStations.map(cities => (
                            <Marker
                            key = {cities.id}
                            position = {[cities.gps_lat, cities.gps_lng]}>
                            <Popup>
                                <h2>{"Name : " + cities.name}</h2>
                            </Popup>
                            </Marker>
                            
                        ))} */}
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