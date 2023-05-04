import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {Error,Dashboard,Home,Signin,Signup,Welcome } from '../pages/'
import { Navbar, Footer } from '../components'
import 'semantic-ui-css/semantic.min.css';
const RootNavigation = () => {
  return (
    <>

    <Navbar /> 
    <Routes>
        <Route path='*' element={<Error />} />
        <Route path='/' element={<Welcome />} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/Signin' element={<Signin />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Dashboard' element={<Dashboard />} />
    </Routes>
    <Footer />
    </>
  )
}

export default RootNavigation
