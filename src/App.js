import styles from'./styles/cronos.module.css';
import './App.css';
import {useState,useEffect} from 'react';
import AudioPlayer from './alarm/alarm';
import  {Counter}  from './pause/pause';
function App() {
  const [focus,setFocus]=useState('');
  const [where,setWhere]=useState('');
  const [getAlarm,setAlarm]=useState('');
  const initial={0:'hours',
  1:'silver',
  2:'silver',
  3:'hours',
  4:'silver',
  5:'silver',
  6:'hours',
  7:'silver',
  8:'silver',
  9:'hours',
  10:'silver',
  11:'silver'}
const [getColour,setColour]=useState(
{0:'hours',
1:'silver',
2:'silver',
3:'hours',
4:'silver',
5:'silver',
6:'hours',
7:'silver',
8:'silver',
9:'hours',
10:'silver',
11:'silver'}

);
const [pause,setPause]=useState('stop');
useEffect(()=>{
   const timer={timer:''};

  if(focus){
    timer.timer=setInterval(()=>{
      console.log('intervalstarted');
      setWhere(prevState=>prevState+=1)
    },1000) 
  }
  return ()=>{
    clearInterval(timer.timer);
    timer.timer='';  
  };

},[focus]);

useEffect(()=>{
console.log('count'  +where);
if(where===0){
  setColour({...getColour,0:'coloured'});
}
if(where===1){
  setColour({...getColour,1:'coloured'})
}
if(where===2){
  setColour({...getColour,2:'coloured'})
}
if(where===3){
  setColour({...getColour,3:'coloured'})
}
if(where===4){
  setColour({...getColour,4:'coloured'})
}
if(where===5){
  setColour({...getColour,5:'coloured'})
}
if(where===6){
  setColour({...getColour,6:'coloured'})
}

if(where===7){
  setColour({...getColour,7:'coloured'})
}
if(where===8){
  setColour({...getColour,8:'coloured'})
}
if(where===9){
  setColour({...getColour,9:'coloured'})
}
if(where===10){
  setColour({...getColour,10:'coloured'})
}

if(where===11){
setAlarm('play');
setFocus('');
setColour(initial);
setPause('start');
}

return(()=>{ 

})
},[where])
  

const startFocus =()=>{
 console.log('start');
  setFocus(true);
  setWhere(0);
  setAlarm('pause');
  setPause('stop');
}
const stopPause=(val)=>{
  setPause(val);
  setAlarm('pause')
}


  return (
    <>
    <div className={styles.container}>
    <div className={styles.inner}></div>
    <div className={`${styles['circle-div']} ${styles[getColour[0]]}`}></div>  
    <div className={`${styles['circle-div']} ${styles[getColour[1]]}`}></div>
    <div className={`${styles['circle-div']} ${styles[getColour[2]]}`}></div>
    <div className={`${styles['circle-div']} ${styles[getColour[3]]}`}></div>
    <div className={`${styles['circle-div']} ${styles[getColour[4]]}`}></div>
    <div className={`${styles['circle-div']} ${styles[getColour[5]]}`}></div>  
    <div className={`${styles['circle-div']} ${styles[getColour[6]]}`}></div>  
    <div className={`${styles['circle-div']} ${styles[getColour[7]]}`}></div>
    <div className={`${styles['circle-div']} ${styles[getColour[8]]}`}></div>
    <div className={`${styles['circle-div']} ${styles[getColour[9]]}`}></div>
    <div className={`${styles['circle-div']} ${styles[getColour[10]]}`}></div>
    <div className={`${styles['circle-div']} ${styles[getColour[11]]}`}></div> 
    <div className={styles.outter}></div>
    <button className={styles.button} onClick={startFocus}>Set focus</button>
    </div>
   <AudioPlayer play={getAlarm}></AudioPlayer>
{(pause==='start')&&<Counter action={pause} stopPause={stopPause}></Counter>}
    </>
  );
}

export default App;
