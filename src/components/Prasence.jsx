import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Prasence() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='container-flued h-[47vh] h-Auto ourPresence postion-reletive z-20 bg-white'>
    
      <div className="row h-50 ourPresenceRow row2 justify-center justify-lg-start">
        <h1 className=' t24px'>Our Presence</h1>
        <Link to={'/pg-in-noida'} className=" images prasence-card p-3 my-lg-0 shadow-md">
        <img src="\Cityimages\noida3.jpg" alt="" />
        <h2 className='p24px fwnormal primeryColor text-center text-uppercase  mt-3'>Noida</h2>
        </Link >
        <Link to={'/pg-in-delhi'} className=" images prasence-card p-3 my-lg-0 shadow-md">
          <img src="\Cityimages\delhi.jpg" alt="" />
          <h2 className='p24px fwnormal primeryColor text-center mt-3'>DELHI</h2>
        </Link >
        <Link to={'/pg-in-gurugram'} className=" images prasence-card p-3 my-lg-0 shadow-md">
        <img src="\Cityimages\gurugram.jpg" alt="" />
        <h2 className='p24px fwnormal primeryColor text-center text-uppercase  mt-3'>gurugram</h2>
        </Link >
        <Link to={'/pg-in-grater-noida'} className=" images prasence-card p-3 my-lg-0 shadow-md">
        <img src="\Cityimages\greater-noida.jpg" alt="" />
        <h2 className='p24px fwnormal primeryColor text-center text-uppercase  mt-3'>Greater noida</h2>
        </Link >
        <Link to={'/pg-in-gaziyabad'} className=" images prasence-card p-3 my-lg-0 shadow-md">
        <img src="\Cityimages\ghaziabad.jpg" alt="" />
        <h2 className='p24px fwnormal primeryColor text-center text-uppercase  mt-3'>Ghaziabad</h2>
        </Link >
      </div>
    </div>
  )
}

export default Prasence