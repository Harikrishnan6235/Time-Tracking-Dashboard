import React from 'react'
import "./Routine.css"
import icon from "../routinecard/ellipsis.svg"

function Routinecard({image,backgroundColor,title,time,lastWeek}) {
  return (
    <div className='timecard' style={{backgroundImage:`url(${image})`,backgroundColor:backgroundColor}}>
       
      <div className="details">
        <div className="elements">
        <h1 className="work">{title} </h1>
        <img className='icon' src={icon} alt="" />
        </div>
        <div className="times">

        <h1 className="time"> {time}hrs </h1>
        <h1 className="lastweek">Last week - {lastWeek}hrs</h1>
        </div>

        
      </div>
    </div>
  )
}

export default Routinecard