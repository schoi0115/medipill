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
              name={medicine.name}
              dose={medicine.dose}
              maxdose={medicine.maxdose}
              current_volume={medicine.current_volume}
              getTheData={getTheData}
              user={user}
              />
            )
      })}
      </div>
   
    );
  }
}

export default Home;




