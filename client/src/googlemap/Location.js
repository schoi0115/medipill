import React from 'react'
import "./Gmap.css"

function Location({panTo, options}){
    return(
        <button className="locate" onClick={()=> {
            navigator.geolocation.getCurrentPosition((position) => {
                panTo({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                })
            }, () => null, options)
        }}>
            Locate me
        </button>
    ) 
}

export default Location