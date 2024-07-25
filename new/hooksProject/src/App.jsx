import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

function addvalue(){
  
  setCounter((prevCounter)=>prevCounter+1);
  setCounter((prevCounter)=>prevCounter+1);
  setCounter((prevCounter)=>prevCounter+1);
  setCounter((prevCounter)=>prevCounter+1);
}

  return (
    <>
     <h1>Hishita</h1>
     <button classsName="m-5" onClick={addvalue}>Counter:{counter}</button>
     <button onClick={addvalue}>Counter2:{counter}</button>
    </>
  )
}

export default App
