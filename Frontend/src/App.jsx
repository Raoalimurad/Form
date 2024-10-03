import React from 'react'
import Signup from './pages/Signup'
import toast, { Toaster } from 'react-hot-toast';
import {Route,Routes} from 'react-router-dom'
import Login from './pages/Login';

const App = () => {
  return (
    <div>
      <Toaster />
      
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
