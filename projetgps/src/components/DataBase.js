import { useEffect, useState } from "react";
import axios from "axios";

function ConnectDatabase() {

  // useEffect(() => {  
  //   axios.get("/JSON/cities.json")
  //       .then((res) => setCities(res.data))
  //           .catch((err) => console.log(err));
  //   }, []); 
  

  return (
    <div>
      {/* <ul>
        {cities.map((cities, index) => (
          <li key={index}>
            {cities.code}: {cities.id} {cities.name} {cities.slug}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default ConnectDatabase;