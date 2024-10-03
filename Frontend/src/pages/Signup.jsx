import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import {Link, useNavigate} from 'react-router-dom'

const Signup = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const submitHandler = async ()=>{
        try {
            const response = await axios.post(`https://form-eight-rust.vercel.app/api/v1/user/register`,{name,email,password})
            const result = response.data
            if(result.success){
                toast.success(result.message)
                navigate('/login')
            }
            
        } catch (error) {
            console.log(error,'from signup')
            toast.error(error.response.data.message)
        }
    }
    return (
        <div className='signup'>
            <div className='forms'>

           <h1 className='heading'>Register</h1>
            <div>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='enter your name' className='input'/>
            </div>
            <div>
                <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your email' className='input'/>
            </div>
            <div>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='enter your password' className='input'/>
            </div>
            <div>
                <button onClick={submitHandler} className='btn'>Signup</button>
                <p className='subHeading'>Already have an account ? <span><Link to={'/login'}>Login</Link></span></p>
            </div>
           
        </div>
        </div>
    )
}

export default Signup
