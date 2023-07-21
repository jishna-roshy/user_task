import React, { useState } from 'react'
import './Login.css'
// import {AiOutlineEye} from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {

const [uname,setUname]=useState("")
const [password,setPassword]=useState("")
let location=useNavigate()

// console.log(email);
const Login=async (e)=>{
  e.preventDefault()
  const body={
    uname,
    password
  } 

  try{
  const result=await axios.post('http://localhost:8000/Login',body)
if(result.data.message=="Login Success"){
location('/home',{state:{id:uname}})
}
else if(result.data.message=="Incorrect psw or uname"){
  alert('user have not sign up')
}
  }
  catch(e){
    console.log(e);
  }
}
  return (
    <div>

<div className="nav">
        <span className="text">Don't have an account?</span>
        <NavLink to={"/"}><button typeof="submit" className="btn2">Sign Up</button></NavLink>
      </div>
      <div className="container">
        <form action="/" id="form">
          <h1>Welcome back!</h1>

          <label htmlFor="name">Name</label>
          <input onChange={(e)=>setUname(e.target.value)} type="text" id="name" />

          <label htmlFor="pswd">Password</label>
          <input onChange={(e)=>setPassword(e.target.value)} type="password" id="pswd" />
          {/* <AiOutlineEye className="icon-pswd"/> */}

          <div className='checkbox'>
              <input type="checkbox" name="checkbox" id="checkbox"/>
              <label htmlFor="checkbox">Remember me</label>
          </div>
          
          <button onClick={(e)=>Login(e)} type="submit" className="btn3">Login</button>
        </form>
        
      </div>
        <div className='forgot'><a href="">Forgot your password?</a></div>
        <div className="circle"></div>
    </div>
  )
}

export default Login