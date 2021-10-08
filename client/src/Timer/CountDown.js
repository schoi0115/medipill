// import React, {useEffect, useState} from 'react'
// import './Clock.css';

  
// function CountDown(){

//     const hoursMinSecs = {hours:0, minutes: 0, seconds:3}
   
//     const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
//     const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);
  

//     const tick = () => {
   
//         if (hrs === 0 && mins === 0 && secs === 0) 
//             reset()
//         else if (mins === 0 && secs === 0) {
//             setTime([hrs - 0, 0, 10]);
//         } else if (secs === 0) {
//             setTime([hrs, mins - 0, 3]);
//         } else {
//             setTime([hrs, mins, secs - 1]);
//         }
//     };


//     const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

    
//     useEffect(() => {
//         const timerId = setInterval(() => tick(), 1000);
//         return () => clearInterval(timerId);
//     });

    
//     return (
//         <div className="Countdown">
//             <p>{`${hrs.toString().padStart(2, '0')}:${mins
//             .toString()
//             .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
//         </div>
//     );
// }

// export default CountDown;

import React, {useEffect, useState} from 'react'
import './Clock.css';

  
function CountDown(){
    const [days, setDays] = useState(10)
    const [hours, setHours] = useState(10)
    const [minutes, setMinutes] = useState(10)
    const [seconds, setSecounds] = useState(10)
    const [isLoading, setIsLoading] = useState(true)

    const countdown = () => {
        const endDate = new Date("December 30, 2025 00:00:00").getTime()
        const today = new Date().getTime()

        const timeDiff = endDate - today

        const seconds = 1000
        const minutes = seconds * 60
        const hours = minutes * 60
        const days = hours * 24

        let timeDays = Math.floor(timeDiff/days)
        let timeHours = Math.floor((timeDiff % days) / hours)
        let timeMinutes = Math.floor((timeDiff % hours) / minutes)
        let timeSeconds = Math.floor((timeDiff % minutes) / seconds)

        timeDays = timeDays < 10 ? "0" + timeDays : timeDays
        timeHours = timeHours < 10 ? "0" + timeHours : timeHours
        timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes
        timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds

        setDays(timeDays)
        setHours(timeHours)
        setMinutes(timeMinutes)
        setSecounds(timeSeconds)
        setIsLoading(false)
        if (hours === 6)
        window.alert("Please check time!")
        
    }
useEffect(()=> {
    setInterval(countdown, 1000)
}) 
  
const style ={
    marginTop: "15px",
    fontFamily: "Comfortaa"
}
return(
    <>
    {isLoading ? (
        <div>
    <div className="loading">
        <br /><br />
        <div className="spinner">oo<br /><br /><br /><br />oo
        </div>
                                     
       
     </div>
    <br /><br /><br /><br /><br /><br />
    </div>
    ) : (
        <section className="container">
        <h1 style={style}> Countdown Timer</h1>

        <div className="countdown">
   
            <article>
                <p>{hours}</p>
              
            </article>
            <p style={style}>:</p>
            <article>
                <p>{minutes}</p>
              
            </article>
            <p style={style}>:</p>
            <article>
                <p>{seconds}</p>
              
            </article>
        </div>
    </section>

    )}
    </>
)
}
    

export default CountDown;
