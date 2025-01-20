import './App.css'
import Card from './components/Card'
import CardProfile from './components/CardProfile'
import WorkSVG from './img/icon-work.svg'
import data from './data.json'
import { useState } from 'react'

function App() {

  const [timeFrame, setTimeFrame] = useState("daily")
  console.log(timeFrame)
  return (
    <div className="App">
      <CardProfile name={'Jorge Linares'} imgProfile={'src/img/photo-profile.png'} setTimeFrame={setTimeFrame} />
      {data.map((item, index) => (
        <Card key={index} category={item.title} time={item.timeframes[timeFrame].current} previousTime={item.timeframes[timeFrame].previous} categoryImg={`src/img/icon-${item.title.toLowerCase()}.svg`} timeFrame={timeFrame}/>
      ))}
    </div>
  )
}

export default App