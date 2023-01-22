import React, {useState} from "react";
import '../styles/Form.css';
import { Marker, Popup} from 'react-leaflet';
import 'react-autocomplete-input/dist/bundle.css';
import CitiesData from "../JSON/cities.json"
import DepData from "../JSON/departments.json"
import RegionsData from "../JSON/regions.json"
import '../styles/Map.css';




const TravelForm = () =>{

        const [start, setStart] = useState('')
        const [end, setEnd] = useState('')
    
    
        const handleChangeStart = event => {
            setStart(event.target.value);
        
            console.log('value is:', event.target.value);
          };
    
        const handleChangeEnd = event => {
            setEnd(event.target.value);
        
            console.log('value is:', event.target.value);
          };
    
    
    
          const handleClick = event => {
                //Probleme dans l'affichage du marqueur
            event.preventDefault();
            for(var i = 0; i < Object.values(CitiesData).length; i++){
                // console.log("VILLE" ,CitiesData[i].name)
                if (end === CitiesData[i].name){
                    console.log("TEST" ,CitiesData[i].name);
                    console.log("MARKER", CitiesData[i].gps_lat ,CitiesData[i].gps_lng);
                    return(
                   <Marker position={[CitiesData[i].gps_lat,CitiesData[i].gps_lng]}>
                        <Popup>
                            Ville : {CitiesData[i].name} <br/> Code Postale : {CitiesData[i].zip_code}
                            
                        </Popup>
                   </Marker>
                    )
                


                }
            }
    
            
            console.log('handleClick 👉️', start);
            console.log('handleClick 👉️', end);
    
            
          };

    return(
        <>
            <div className="wrapper">
                <div className="card">
                    <div className="card-body">
                            <h5 className="card-title">Où habitez vous ?</h5>
                        <div className="input-group group-lg mb-3">
                            <input
                                name = "start"
                                placeholder="Entrer une localisation: Ville, département ou région"
                                className="form-control"
                                type="text"
                                Component = "input"
                                onChange={handleChangeStart}
                                value={start}
                                
                            >
                            </input>
                           
                        </div>
                            <h5 className="card-title">Où souhaitez vous vous rendre ?</h5>
                        <div className="input-group group-lg mb-3">
                            <input
                                name = "end"
                                placeholder="Entrer une localisation: Ville, département ou région"
                                className="form-control"
                                type="text"
                                Component = "input"
                                onChange={handleChangeEnd}
                                value={end}
                            >
                            </input>
                        </div>
                        <div>
                            <button className="btn btn-primary" type="button" onClick={handleClick}>C'est parti !</button>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}


export default TravelForm;