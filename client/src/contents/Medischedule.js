import "../App.css";
import "./Med.css";

import React, { useEffect } from "react";

function Medshecudle({name, dose, current_volume}){


const dosetimer = () => {
  
  if (dose === 0)
  return "Choose your own time to take"
  if (dose === 0.1) 
  return "8am, 8pm / 8:00, 20:00 "
  if (dose === 0.15) 
  return "8am, 12pm, 6pm / 8:00, 12:00, 18:00"
  if (dose !== 0.1 || dose !== 0.15 || dose !== 0 )
  return "Take once per day" 

}

console.log(dose)
return(
    <div className="medschelude">
    <table className="center">

      <tr >
          
        <td >Medicine : {name}</td>
      </tr>

      <tr >
         
        <td > Schedule : {dosetimer()}</td>
      </tr>

      <tr>
          
        <td >You have : {current_volume} pills</td>
      </tr>

    </table>
    
    
    </div>
)
}

export default Medshecudle;