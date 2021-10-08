import React, {useRef, useCallback} from "react"
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from 'use-places-autocomplete'
  import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
  } from "@reach/combobox"
  import "./Gmap.css"
  

function Search({panTo}){
  


    const {
        ready, 
        value, 
        suggestions: {status, data}, 
        setValue, 
        clearSuggestions
    } = usePlacesAutocomplete({
      requestOptions: {
        location: { lat: ()=> 40.712776, lng: ()=> -74.005974},
        radius: 200 * 1000,
      }
    })

    return(
      <Combobox 
        onSelect={async (address) => {
            setValue(address, false);
            clearSuggestions()
            try{
                const results = await getGeocode({address});
                const {lat, lng} = await getLatLng(results[0])
                // console.log(lat, lng)
                panTo({lat, lng})

           
            } catch(error){
                console.log("error!")
            }
            }}
        >
        <ComboboxInput className="gsearch" value={value} onChange={(e) => {
          setValue(e.target.value)
        }} 
        disabled={!ready}
        placeholder="Enter an address"
        />
        <ComboboxPopover>
            <ComboboxList> 
            {status === "OK" && 
            
            data.map(({id, description}) => (
                <ComboboxOption key={id} value={description} />
            ))}
            </ComboboxList>
        </ComboboxPopover>
    </Combobox>
    )
  }

  export default Search