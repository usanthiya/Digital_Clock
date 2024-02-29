import React from 'react'
import {useState,useEffect} from "react";
export const DigitalClock = () => {
  const [currenttime, setcurrenttime]=useState(new Date());
  const handletimewithzero=(time)=>{
    return time<10?`0${time}`:time;
  }
  const handletime=(time)=>{
    return time==0?12:time>12?time-12:time;
  }
  const handledate=(date)=>{
    let options={weekday:"long",year:"numeric",month:"long",day:"numeric"};
    return date.toLocaleDateString(undefined,options);
  }
  useEffect(()=>{
    let timer=setInterval(()=>{
        setcurrenttime(new Date());
    },1000);
    return ()=>clearInterval(timer);
  },[])
  return (
    <>
     <div className="digital-clock">
        <h1>Digital Clock</h1>
        <div className='time'>
             {handletimewithzero(handletime(currenttime.getHours()))}:
             {handletimewithzero(currenttime.getMinutes())}:
             {handletimewithzero(currenttime.getSeconds())} {currenttime.getHours>12?" PM":" AM"}
        </div>
        <div className='date'>
           {handledate(currenttime)}
        </div>
     </div>
    </>
  )
}
