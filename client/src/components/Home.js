import "../App.css";
import "./Home.css";
import React from "react";
import Login from "./Login";
import CountDown from '../Timer/CountDown'
import GaugeChart from 'react-gauge-chart'
import Medshecudle from '../contents/Medischedule'


function Home({ setErrors, user, setUser, getTheData, medicine }) {
  const style ={
    lineHeight: "4"
  }
console.log(medicine.map((medicine) => medicine.current_volume))
const dosetimer = () => {
  
  if (medicine.dose === 0)
  return "Choose your own time to take"
  if (medicine.dose === 0.1) 
  return "8am, 8pm / 8:00, 20:00 "
  if (medicine.dose === 0.15) 
  return "8am, 12pm, 6pm / 8:00, 12:00, 18:00"
  if (medicine.dose !== 0.1 || medicine.dose !== 0.15 || medicine.dose !== 0 )
  return "Take once per day" 
  
}

  if (!user) {
    return (
      <Login setUser={setUser} setErrors={setErrors}  />
    );
  } else {
    return (
    
      <div className="home">
        <h1 className="gauge1" style={style}> Welcome {user.first_name}!</h1>
        <div>
        <h1 className="gauge1">
        <CountDown 
        user={user.created_at}
        timestamp={user.timestap}/></h1>
        </div>
        <br />
        <h3 className="gauge">
          
        Keeping your dose within a safe limit
        <GaugeChart id="gauge-chart5"
          nrOfLevels={420}
          arcsLength={[0.3, 0.5, 0.2]}
          colors={['#5BE12C', '#F5CD19', '#EA4228']}
          hideText={true}
          percent={user.total_dose}
          arcPadding={0.01}
          className="gauge3"
        /> </h3>
      {medicine.map((medicine) => {
        return (
        <Medshecudle
          id={medicine.id}
          setUser={setUser}
          user={user}
          name={medicine.name}
          dose={medicine.dose}
          maxdose={medicine.maxdose}
          current_volume={medicine.current_volume}
          getTheData={getTheData}
          user={user}
          />
        )
      })}

      
      <div className="medschelude">
    <table className="center">


      <tr >
          
        <td >Medicine : {medicine.map((medicine) => medicine.name)}</td>
      </tr>

      <tr >
         
        <td > Schedule : {dosetimer()}</td>
      </tr>

      <tr>
          
        <td >You have : {medicine.map((medicine) => medicine.current_volume)} pills</td>
      </tr>

    </table>
    <div>
    {medicine.map((medicine) => medicine.current_volume.forEach)}
      </div>
    
    </div>

      </div>
   
    );
  }
}

export default Home;







