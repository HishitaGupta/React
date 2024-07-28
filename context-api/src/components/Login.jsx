import React ,{useState,useContext}from 'react'
import UserContext from '../context/userContext'

function Login() {

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const  {setUser}= useContext(UserContext)
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password});
    }



  return (
    <>
    <h2>Login</h2>
    <input type="text" placeholder="username" value={username}
    onChange={(e)=>{
        setUsername(e.target.value)
    }}>Enter Username</input>
    <input type="text" placeholder="password"
    value={password}
    onChange={(e)=>{
        setPassword(e.target.value)
    }}>Enter PAssword</input>
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login