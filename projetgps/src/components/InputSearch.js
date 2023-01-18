import React from "react";
import '../styles/InputSearch.css'


const InputSearch = () => {


    return(
        <>
            <div className="wrapper">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Où habitez vous ?</h5>
                        <div className="input-group group-lg mb-3">
                            <input  type="text" className="form-control" 
                                    placeholder="Entrer une localisation: Ville, département ou région"  
                            />
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

export default InputSearch;