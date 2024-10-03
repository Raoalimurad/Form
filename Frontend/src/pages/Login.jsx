import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const submitHandler = async ()=>{
        try {
            const response = await axios.post(`http://localhost:4000/api/v1/user/login`,{email,password})
            const result = response.data
            if(result.success){
                toast.success(result.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
    }
  return (
    <div className='login'>
        <div className='forms'>
         
         <h1 className='heading'>Login</h1>
        
        <div>
                <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your email' className='input'/>
            </div>
            <div>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='enter your password' className='input'/>
            </div>
            <div>
                <button onClick={submitHandler} className='btn'>Login</button>
                <p className='subHeading'>Don't have an account ? <span><Link to={'/'}>Signup</Link></span></p>
            </div>
    </div>
    </div>
  )
}

export default Login
