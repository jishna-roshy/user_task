import React, {useEffect, useState } from 'react'
import './Signup.css'
import axios from 'axios'
// import {AiOutlineEye} from "react-icons/ai";
import { NavLink } from "react-router-dom";
// import Login from '../login/Login';
import { useNavigate } from 'react-router-dom'
import uuid from 'react-uuid'


function Signup() {
const [id,setid]=useState('')
const [uname,setUname]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

useEffect(()=>{
    setid(uuid().slice(0,3))
    },[])

// console.log(uname);
let location=useNavigate()
const login= async (e)=>{
    e.preventDefault()
    setid(uuid().slice(0,3));

     const body={
      id,
      uname,
      email,
      password         
     }
   const result=await axios.post('http://localhost:8000/sign',body)
   alert(result.data.message)
   location('/login')
}
  return (
    <div>
 <div className="nav">
        <span className="text">Already have an account?</span>
        <NavLink to={"/login"}><button typeof="submit" className="btn">Login</button></NavLink>
      </div>
      <div className="container">
        <form action="/" id="form">
          <h1>Let's go!</h1>
          <label htmlFor="name">Full Name</label>
          <input onChange={(e)=>setUname(e.target.value)} type="text" id="name" />

          <label htmlFor="email">Email</label>
          <input onChange={(e)=>setEmail(e.target.value)}  type="email" id="email" />

          <label htmlFor="pswd">Choose Password</label>
          <input onChange={(e)=>setPassword(e.target.value)}  type="password" id="pswd" />
          {/* <AiOutlineEye className="icon-pswd"/> */}

          <button onClick={(e)=>login(e)} type="submit" className="btn1">Sign up</button>
        </form>
        
      </div>
        <div className="circle"></div>

    </div>
  )
}

export default Signup