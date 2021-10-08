import "../App.css";
import "./Med.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";




function MedicineForm({ user, setMedicine, medicine, getTheData }) {
  const [name, setName] = useState("");
  const [volume, setVolume] = useState("");

  const [dose, setDose]  = useState("");
  const [memo, setMemo]  = useState("");
  const [maxdose, setMaxdose] = useState("")
  const [errors, setErrors] = useState([]);
  let history = useHistory();


  function onAddMecidine(newMedicine) {
    const updatedMedicineArray = [...medicine, newMedicine];
    setMedicine(updatedMedicineArray);
  }

  function handleSubmit(e) {
    e.preventDefault();
        fetch("/medicines/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          volume: volume,
          dose: dose,
          memo: memo,
          maxdose: maxdose,
          taken: true,
          user_id: user.id,

        }),
        })
        .then((r) => {
          if (r.ok) {
            getTheData()
        r.json().then((newMedicine) => onAddMecidine(newMedicine));
      
        history.push("/Medicines");
          } else {
            r.json().then((data) => setErrors(data.errors));
            getTheData()
          }
        });
    }


  return (
    <div className="mdform">

      {errors.length > 0 && (
        <div style={{ color: "red" }}>
          {errors.map((error) => (
            <p key={error} style={{margin: "5px"}}>{error}</p>
          ))}
          </div>
      )}
         <div >
       
      <h1 className="arr1">
        Please input your medicine information
      </h1>

     
        <form onSubmit={handleSubmit} className="inSignup2">

          <label>
            Medication:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
          Quantity:
            <input
              type="text"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            />
          </label>
          <br />
          <label>
          How many pills do you take per time? :
            <input
              type="text"
              value={maxdose}
              onChange={(e) => setMaxdose(e.target.value)}
            />
          </label>
          <br />
          <label >
            How many times do you take per day?
            <select
              value={dose}
              className="doseLabel"
              onChange={(e) => setDose(e.target.value)}
            >
              <option value="0.05">1</option>
              <option value="0.1">2</option>
              <option value="0.15">3</option>
              <option value="0">Not Sure</option>
            </select>
          </label>
          <br />
            <p>       Memo:</p>
          <label className="inSignup2Memo">
   
            <textarea
              type="text"
              
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
            />
          </label>
          <br />

     
          <input className="subtn" type="submit" value="Submit" />
        </form>
    </div>
      </div>
     

  );
  
}

export default MedicineForm;
