import "../App.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";



function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));

      } else {
        r.json().then((data) => window.alert(data.error));
     
      }
    });
  }
const style = {
  textDecoration: "none",
  fontSize: "25px",
  color: "white",
  lineHeight: "1.9",
}
  return (

    <div className="frontpage">
      <nav className="signupNav" >
        <NavLink className="signup" style={style} to="/signup">
          Sign up
        </NavLink>
      </nav>
 
      <div className="c1Style">
        <h1 className="font">Your medicine application</h1>


        <div className="box">
          <form onSubmit={(e) => handleSubmit(e)}>
            <h3 className="font">Please Sign In</h3>
            <div style={{ lineHeight: "2em" }}>
              <label htmlFor="username">Username: </label>
              <input
                type="text"
                className="inputstyle" 
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="password" className="passwordmargin">Password:{" "}
              </label>
              <input
                type="password"
                className="inputstyle" 
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
            </div>
            <button type="submit" className="fontbtn">
              Login
            </button>
          </form>
        </div>
      </div>
        <div className="frontbg">
          <h1></h1>
        </div>
        <div className="signupNavbt">
          
          <li>Contact info: schoi0115@gmail.com Phone: 607-206-6529</li>
          <li>Phone: 607-206-6529</li>
          <li> Created by Shawn Choi </li>
         
        </div>
    </div>
    
      
   
    
          
    
  );
}
export default Login;
