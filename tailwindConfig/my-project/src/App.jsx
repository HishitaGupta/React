import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    name:"Hishita",
    surname:"Gupta"

  }

  return (
    <>
    <h1 className="bg-white text-black p-4 rounded-xl mb-4">Tailwind Test</h1>
     <Card name="Hishita"/>

    </>
  )
}

export default App
