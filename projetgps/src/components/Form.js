import React, {useState, useEffect} from "react";
import '../styles/Form.css';
import TextInput from 'react-autocomplete-input';
import 'react-autocomplete-input/dist/bundle.css';
import axios from "axios";



const TravelForm = () => {







    //////////////// Le code commenté fonctionne mais fait exploser la console avec + de 60 000 requêtes ... 

    // const [cities, setCities] = useState([]);
    // const [departements, setDepartements] = useState([]);
    // const [regions, setRegions] = useState([]);

    // console.log("j'ai pécho les cities",cities) /// retourne l'entièreté des villes en console :) !! 
    // console.log("j'ai pécho les départements", departements)
    // console.log("J'ai pécho les régions", regions)


    //     useEffect(() => {  
    //         axios.get("/JSON/cities.json")
    //             .then((res) => setCities(res.data))
    //                 .catch((err) => console.log(err))
    //         }, []);   
    //     useEffect(() => {
    //         axios.get("/JSON/departements.json")
    //         .then((res) => setDepartements(res.data) )
    //             .catch((err) => console.log(err))   
    //     })

    //     useEffect(() => {
    //         axios.get("/JSON/regions.json")
    //         .then((response) => setRegions(response.data) )
    //             .catch((err) => console.log(err))   
    //     })

    return(
        <>
            <div className="wrapper">
                <div className="card">
                    <div className="card-body">
                            <h5 className="card-title">Où habitez vous ?</h5>
                        <div className="input-group group-lg mb-3">
                            <TextInput
                                name = "start"
                                placeholder="Entrer une localisation: Ville, département ou région"
                                className="form-control"
                                type="text"
                                Component = "input"
                                trigger={[""]}
                                options = {"toto"}
                            >
                            </TextInput>
                        </div>
                            <h5 className="card-title">Où souhaitez vous vous rendre ?</h5>
                        <div className="input-group group-lg mb-3">
                            <TextInput
                                name = "end"
                                placeholder="Entrer une localisation: Ville, département ou région"
                                className="form-control"
                                type="text"
                                Component = "input"
                                trigger={[""]}
                                options = {"GetCities()"}
                            >
                            </TextInput>
                        </div>
                        <div>
                            <button className="btn btn-primary" type="button">C'est parti !</button>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default TravelForm;