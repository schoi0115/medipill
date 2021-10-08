import '../App.css';
import React from "react";
import { useHistory } from "react-router-dom";
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NavBar({ user, onLogOut, getTheData }) {
  let history = useHistory()
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then(onLogOut);

    history.push('/')
  }

  const style = {
    textDecoration: "none",
    fontSize: "30px",
    color: "white",
    lineHeight: "2.5"
 
  }

  return (
      <div className="gauge1">
        {user ? (
        //  <Motion 
        //  defaultStyle={{x: -200, opacity: 0}} 
        //  style={{x: spring(0), opacity: spring(1)}} >

        //   {(style) => (
        //   <div style={{ transform: `translateX(${style.x}px)`, opacity: style.opacity}}>

          <nav className="navBar" >
            <Link style={style} to="/" ><FaIcons.FaBars /> Home  </Link>
             | 
             <Link style={style} to="/medicines"> Medicines  </Link> |

            <Link style={style} to="/medicines/new" >  New Medicine</Link> | 

            <Link style={style} to="/maps"> Location</Link>

            <button className="logoutbtn" onClick={handleLogoutClick}>Logout</button>
          
          </nav > 
          // // {/* </div>
          // // )} */}
          // </Motion>
        
          )  :  (
          
          null) }

      </div>
  );
}

export default NavBar;
