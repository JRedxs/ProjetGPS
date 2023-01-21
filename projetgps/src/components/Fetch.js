import React from "react";
import axios from "axios";



const FetchData = () => {

    
    const getCities = () => {
       const axiosFetchCities = axios.get('JSON/cities.json')
       console.log("get cities",axiosFetchCities)
    } 

    

    return(
        <>
         <div>
            {getCities}
         </div>
        </>
    )
}

export default FetchData;