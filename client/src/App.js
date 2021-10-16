
import './App.css';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUpForm";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

import MedicineContainer from './contents/MedicineContainer';
import MedicineForm from './contents/MedicineForm'

import ProjectMap from './googlemap/ProjectMap'
import mapStyles from './googlemap/mapStyles'


function App() {

  const [user, setUser] = useState(false);
  const [errors, setErrors] = useState(false);
  const [medicine, setMedicine] = useState([]);

  const getTheData = async () => {
    try {
      const response = await fetch("medicines");
      if (!response.ok) throw Error();
      const data = await response.json();
      setMedicine(data); 
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json()
        .then((user) => setUser(user));
        
      }
      
      getTheData()
      
    });
  }, []);
  


  function onLogOut() {
    setMedicine([]);
    setUser(false);
  }

  function onUpdateMedicine(updatedMedicine) {
    const updatedMedicineArray = medicine.map((medicine) => {
      if (medicine.id === updatedMedicine.id) {
        return updatedMedicine;
      } else {
        return medicine;
      }
      
    });
    setMedicine(updatedMedicineArray);
    
  }

  return (
    <div>
      <NavBar user={user} setUser={setUser} onLogOut={onLogOut} getTheData={getTheData}/>
      <main>
        <Switch>
          <Route exact path="/">
            <Home
              setErrors={setErrors}
              setUser={setUser}
              user={user}
              medicine={medicine}
              getTheData={getTheData}
              setMedicine={setMedicine}
            />
          </Route>

          <Route exact path="/medicines">
            <MedicineContainer 
              setMedicine={setMedicine}   
              medicine={medicine}
              getTheData={getTheData}
              user={user}
              setErrors={setErrors}
              onUpdateMedicine={onUpdateMedicine} />
          </Route>

          <Route exact path="/medicines/new">
            <MedicineForm
              setMedicine={setMedicine}
              id={medicine}
              medicine={medicine}
              errors={errors}
              user={user}
              getTheData={getTheData}
            />
          </Route>

          <Route exact path="/maps">
            <ProjectMap 
            mapStyles={mapStyles}
              />
          </Route>

          <Route exact path="/signup">
            <SignUp setUser={setUser}
            getTheData={getTheData} />
          </Route>

          <Route exact path="/login">
            <Login setUser={setUser} getTheData={getTheData} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
