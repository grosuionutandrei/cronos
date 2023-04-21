import React, { useRef } from "react";


function AudioPlayer(props) {
  const audioRef = useRef(null);

  if(props.play==='play'){
    audioRef.current.play();
  }else if(props.play==="pause"){
    audioRef.current.pause();
  }

  return (
    <div>
      <audio ref={audioRef} type='audio/mpeg' src='http://princezze.free.fr/sounds/alert3.MP3'></audio>
 {/*      <button onClick={playAudio}>Play</button>
      <button onClick={pauseAudio}>Pause</button> */}
    </div>
  );
}

export default AudioPlayer;
