import { useState } from 'react'
// import './App.css'

function App() {
  const [color , setColor] =useState("#000");

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}></div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 rounded-full py-2'>
        <div className= "flex flex-wrap justify-center shadow-lg px-3 py-2 rounded-full border bg-slate-50">
          <button className="outline-none px-4 py-1 rounded-full text-white m-2" style={{backgroundColor:"red"}} onClick={()=>{setColor("red")}}>Red</button>
          <button className="outline-none px-4 py-1 rounded-full text-white m-2" style={{backgroundColor:"Green"}} onClick={()=>{setColor("green")}}>Green</button>
          <button className="outline-none px-4 py-1 rounded-full text-white m-2" style={{backgroundColor:"blue"}} onClick={()=>{setColor("blue")}}>Blue</button>
          <button className="outline-none px-4 py-1 rounded-full text-white m-2" style={{backgroundColor:"yellow"}} onClick={()=>{setColor("yellow")}}>Yellow</button>
          <button className="outline-none px-4 py-1 rounded-full text-white m-2" style={{backgroundColor:"pink"}} onClick={()=>{setColor("pink")}}>Pink</button>P
          <button className="outline-none px-4 py-1 rounded-full text-white m-2" style={{backgroundColor:"Purple"}}onClick={()=>{setColor("purple")}}>Purple</button>
        </div>
      </div>
    </>
  )
}

export default App
 