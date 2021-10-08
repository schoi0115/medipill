import '../App.css';
import React, { useState } from "react";
import '../Timer/Clock.css'
import { Motion, spring } from "react-motion"
import ToggleSwitch from '../Timer/ToggleSwitch'
import 'semantic-ui-css/semantic.min.css'
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

function MedicineCard({ name, volume, memo, taken, maxdose, id, current_volume, onUpdate, getTheData, btnConn}) {


  const [editing, setEditing] = useState(false);
  const [updatedVolume, setUpdatedVolume] = useState("")
  const [memoEdit, setMemoEdit] = useState(false)
  const [updateMemo, setUpdateMemo] = useState("")
  const [grey, setGrey] = useState(false)
  let history = useHistory()


  function handleEdit(){
    setEditing(!editing)
  }

  function handleMemoEdit(){
    setMemoEdit(!memoEdit)
  }

  function handleRemove(){
    fetch(`/medicines/${id}/delete`, {
      method: 'PATCH',
      headers: { 
        'Content-Type': 'application/json',
        Accept: 'application/json' 
    },
      body: JSON.stringify({
        taken: !taken,
      })
    })
    .then((r) => r.json())
    .then((del) => onUpdate(del.id))
    getTheData()
  }

 function btnConn2(){
    fetch(`/medicines/${id}/update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        volume: updatedVolume,
    }),
  })
    .then((r) =>  r.json())
    .then((data) => onUpdate(data))    
    getTheData()
 }

 function btnConn3(){
  fetch(`/medicines/${id}/update`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      memo: updateMemo,
  }),
})
  .then((r) =>  r.json())
  .then((data) => onUpdate(data))    
  getTheData()
}




 function btnConn(){
  fetch(`/medicines/${id}/update`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      volume: volume - maxdose,
  }),
},[])
  .then((r) =>  r.json())
  .then((data) => onUpdate(data))    

  if (current_volume < 10){
    
    swal("You are running out of the medicine", {
      buttons: {
        cancel: "No",
        catch: {
          text: "Stay",
          value: "catch",
        },
        Map: true,
      },
    })
    .then((value) => {
      switch (value) {
     
        case "Map":
          swal(history.push("/maps"));
          break;
     
        case "catch":
          swal("Please check location tap", "Don't forget refill your pills", "success");
          break;
     
        default:
          break;
      }
    });

}

}

  return (
    <Motion 
      defaultStyle={{x: -200, opacity: 0}} 
      style={{x: spring(0), opacity: spring(1)}} 
    >
      {(style) => (
          <div  style={{ transform: `translateX(${style.x}px)`, opacity: style.opacity}}>
      <div className="cardInd">
      <h1 style={{marginTop: "30px"}}>Medication: {name}</h1> 

      <h2>
        Quantity: {current_volume} pills
        <button onClick={handleEdit} className="fontbtn3">{!editing? "Edit" : "Close"}</button>
      {editing?(
        <div>
        <form onSubmit={btnConn2}>
        <input
          type="text"
          placeholder="Add more pills"
          value={updatedVolume}
          onChange={(e) => setUpdatedVolume(e.target.value)} />
        <button type="submit" className="fontbtn3">Save</button>
        </form>
        </div>
          ) : (
        null
        )}
        </h2>
      <h2>
        Please take {maxdose} pills
      </h2>

      <h2>
        Memo: {memo} <br />
        <button onClick={handleMemoEdit} className="fontbtn3">{!memoEdit? "Edit" : "Close"}</button>
      {memoEdit?(
        <div>
        <form onSubmit={btnConn3}>
        <input
          type="text"
          placeholder="... memo"
          value={updateMemo}
          onChange={(e) => setUpdateMemo(e.target.value)} />
        <button type="submit" className="fontbtn3">Save</button>
        </form>
        </div>
          ) : (
        null
        )}
      </h2>
        Check the button after you took the medicine 
      <div onClick={btnConn} >
          <ToggleSwitch
          grey={grey} setGrey={setGrey} />
        </div>
        <br />
        <button onClick={handleRemove} className="fontbtn1">
          delete
        </button>
        </div>
      </div>
      )}
    </Motion>

  );
}

export default MedicineCard;


