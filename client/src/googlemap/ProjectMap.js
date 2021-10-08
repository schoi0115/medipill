import React, { useRef, useCallback, useState } from "react"
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from "@react-google-maps/api"
import "@reach/combobox/styles.css"
import mapStyles from "../googlemap/mapStyles"
import Search from "./Search"
import Location from './Location'
import "../App.css"
import "./Gmap.css"


function ProjectMap(){
  const libraries = ["places"]
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const [markers, setMarkers] = useState([])
  const onMapClick = useCallback((event)=> {
    setMarkers(current => [...current, {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
      time: new Date(),
    },
  ]);
}, [])


  const mapRef = useRef()
  const onMapLoad = useCallback((map) => {
    mapRef.current = map
  }, [])
  const panTo = useCallback(({lat, lng}) => {
    mapRef.current.panTo({lat, lng})
    mapRef.current.setZoom(17)
  }, [])


  const mapContainerStyle ={
    width: "90vw",
    height: "40vw",
    marginLeft: "5vw"
  }
  const center ={
    lat: 40.712776,
    lng: -74.005974,
  }
  const options={
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true
  }
  


  if (loadError) return "Error loading maps"
  if (!isLoaded) return "Loading map"
 

  return(
    <div className="gmap">
      <h1>Find a pharmacy near you</h1>
      <h3 style={{color:"#00ff2c"}}>Green = Hospital</h3>
      <Location 
      panTo={panTo}
      options={options}/>
      <Search 
        panTo={panTo}
      />

    <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}  
        options={options}
        mapStyles={mapStyles}
        className="gmap1"
        
        onLoad={onMapLoad}
       >
       
    </GoogleMap>
    </div>

  )
}

export default ProjectMap

// {markers.map(marker => (
//   <Marker 
//     key={marker.time.toISOString()}
//     position = {{lat: marker.lat, lng: marker.lng}}
//   />
//   ))}

// icon={{
//   url: "/bear.svg",
//   scaledSize: new window.google.maps.Size(30, 30),
//   orgin: new window.google.maps.Point(0,0),
//   anchor: new window.google.maps.Point(15,15),
// }}
