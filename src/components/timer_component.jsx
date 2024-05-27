import { useState ,useEffect } from "react";

function TimerComponent(){

    const [time , SetTime] = useState(0)

useEffect(()=>{
    const timer = setInterval(()=>{
        SetTime((prevTime)=>prevTime+1)
    },1000)
    return()=>{
        clearInterval(timer);
    }
},[]);

    return(
        <div>
      <h2>Timer : {time}</h2>
        </div>
    )
}

export default TimerComponent