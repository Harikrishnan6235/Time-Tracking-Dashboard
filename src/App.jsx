import React, { useEffect, useState } from 'react'
import "./App.css"
import Routinecard from './assets/components/routinecard/Routine'
import image from "./assets/jeremy.png"
import work from "./assets/work.svg"
import play from "./assets/icon-play.svg"
import exercise from "./assets/icon-exercise.svg"
import social from "./assets/icon-social.svg"
import selfcare from "./assets/icon-self-care.svg"
import study from "./assets/icon-study.svg"
import data from "./data.json"

function App() {
  const [colors, setColors] = useState([
    "hsl(15, 100%, 70%)","hsl(195, 74%, 62%)"," hsl(348, 100%, 68%)","hsl(145, 58%, 55%)","hsl(264, 64%, 52%)","hsl(43, 84%, 65%)"
  ])
  const [images, setImages] = useState([
    work,play,study,exercise,social,selfcare
  ])
  const [select, setSelect] = useState("daily")

  function Output(details){
    if(select === "daily"){
      return details.timeframes.daily.current;
    }
    else if(select === "weekly"){
      return details.timeframes.weekly.current;
    }
    else return details.timeframes.monthly.current;

  }

  function GetPrevious(lastweek){
    if(select === "daily"){
      return lastweek.timeframes.daily.previous;
    }
    else if(select === "weekly"){
      return lastweek.timeframes.weekly.previous;
    }
    else return lastweek.timeframes.monthly.previous;

  }

  return (
    <div className='main'>
        <div className="sub">
        <div className="profilediv">
        <div className="profile">
          <img className='jeremy' src={image} alt="" />
          <h1 className="report">Report for</h1>
          <h1 className="name">Jeremy Robson</h1>
        </div> 
        <div className="period">
        <h1 onClick={() => setSelect('daily')} style={{color:select === "daily"?'white' :"grey"}} className="daily">Daily</h1>
        <h1 onClick={() => setSelect('weekly')}  style={{color: select === "weekly"? "white":"grey"}} className="weekly">Weekly</h1>
        <h1 onClick={() => setSelect("monthly") } style={{color: select === "monthly"?"white":"grey"}} className="monthly">Monthly</h1>

        </div>

        
        </div>
        <div className="compdiv">
          {data.map((routine,index)=>{
            return(
              <Routinecard key={index} backgroundColor={colors[index]} image={images[index]} title={routine.title} time={Output(routine)} lastWeek={GetPrevious(routine)} />
            )
          })}
        </div>

    
        </div>
    </div>
  )
}

export default App