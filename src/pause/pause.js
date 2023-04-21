import React, { useState, useEffect } from 'react';
import style from './pause.module.css';
import { Buttons } from './handlebuttons';

export function Counter(props) {
  const [seconds, setSeconds] = useState(300); // 5 minutes in seconds
let controlTimer=props.action;
let timer={timer:""};

  useEffect(() => {
    console.log(controlTimer);
    if(controlTimer){
  timer.timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);
  }
    return (() => {clearInterval(timer.timer);
    });
  }, [controlTimer, timer]);


  /* decide if the counter should stop */
if(seconds===0){
  controlTimer="";
}

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

/* Cancel the pause counter by setting the seconds to 0 */
  const cancelPause=(val)=>{
    if(val){
    setSeconds(0);
    props.stopPause('stop');
    }
  }


  /* increase the pause duration by 5 minutes */
  const increasePause=(val)=>{
   if(val){
    setSeconds((prevState)=>prevState+300);
   } 
  }

  return (
    <div className={style.counter}>
    Your fun time: {minutes < 10 ? `0${minutes}` : minutes}:{remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}
    <Buttons className={style.controlPause} getCancel={cancelPause} getIncresed={increasePause}></Buttons>
    </div>
  );
}


