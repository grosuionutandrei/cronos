import React from "react";


export const  Buttons=(props)=>{

/* increase pause duration by 5 minutes */
    const increasePause =()=>{
     props.getIncresed(true);
    }

/* cancel the pause */

const cancelPause=()=>{
props.getCancel(true);
}

return (
<div className={props.className}>
<button onClick={increasePause}>+ 5 minutes</button>
<button onClick={cancelPause}>Cancel </button>
</div>
)
}