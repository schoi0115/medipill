// import React from 'react';
// import './Clock.css';
// import { useState } from 'react'

// const ToggleSwitch = () => {
//     const [value, setValue] = useState(false);
//     const handleToggle = () => setValue(!value)
//     return (
//       <div>
//        <input
//           checked={value}
//           onClick={handleToggle}
//           className="react-switch-checkbox"
//           id={`react-switch-new`}
//           type="checkbox"
//         />
//         <label
//           className={value ? "react-switch-label" : "react-switch-label2"}
//           htmlFor={`react-switch-new`}
//         >
//           <span className={`react-switch-button`} />
//         </label>
//       </div>
//     );
//   };

// export default ToggleSwitch;

import React from 'react'
import './Clock.css';
import { Checkbox } from 'semantic-ui-react'


function ToggleSwitch ({grey, setGrey}) {
  
    return(
    <div>
    {grey? 
        <Checkbox toggle className="toggle1"/> 
        : 
        <Checkbox toggle className="toggle2"/>}
    </div>
    )
}

export default ToggleSwitch