import '../App.css';
import '../Timer/Clock.css'
import React from "react";
import MedicineCard from "./MedicineCard";
import { useEffect } from "react"
import Clock from 'react-live-clock'


function MedicineContainer({user, setErrors, setMedicine, medicine, getTheData, onUpdateMedicine}) {

  useEffect(() => {
    fetch("/medicines")
      .then((res) => res.json())
      .then(setMedicine);
  
  }, [])

  function onUpdate(id){
    const removeMedicineArray = medicine.filter(medicine => medicine.id !== id)
    setMedicine(removeMedicineArray)
  }
  
  return (
    <div className="gauge4">
  

      <Clock className='clock' format={'HH:mm:ss'} ticking={true} />
     
      <div className="cardContainer">
      {medicine.map((medicine) => {
        return (
          <div key={medicine.id}>
            <MedicineCard
              id={medicine.id}
              name={medicine.name}
              volume={medicine.volume}
  
              memo={medicine.memo}
              taken={medicine.taken}
              maxdose={medicine.maxdose}
              current_volume={medicine.current_volume}
 
              getTheData={getTheData}
              onUpdate={onUpdate}
              user={user}
              setErrors={setErrors}
              onUpdateMedicine={onUpdateMedicine}

              setMedicine={setMedicine}
            />
        </div>
        );
        
      })}
         <br />
      <button className="fontbtn2" onClick={() => window.location.reload(false)}>
       
      Click when you are done with pills
  
      </button>
      </div>
                      
    </div>
    
    
  );
}

export default MedicineContainer;
