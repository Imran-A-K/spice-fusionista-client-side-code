/* eslint-disable no-unused-vars */ 
import React from 'react'
import NavigationBar from '../components/shared/NavigationBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/shared/Footer/Footer'



const Main = () => {
  return (
    <div className='bg-gradient-to-r from-green-50/20 to-lime-50/20'>
      <NavigationBar></NavigationBar>
      <div className='min-h-[calc(100vh-136px)]'>
      <Outlet></Outlet>
      </div>
    
      
      <Footer></Footer>
    </div>
  )
}

export default Main