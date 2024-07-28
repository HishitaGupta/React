import { useState } from 'react'
import UserContextProvider from './context/userContectProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'



function App() {
  

  return (
    <>
    <UserContextProvider>
    <h1>Hishita</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
      
    </>
  )
}

export default App
