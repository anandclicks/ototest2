import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Prasence() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='container-flued h25 ourPresence'>
    
      <div className="row h-full gap-5 row2 justify-center justify-lg-start">
        <h1 className='ourPrasence '>Our Presence</h1>
        <Link to={'/pg-in-noida'} className="col-lg-2 col-8 h-full images card p-3 my-lg-0 shadow-md">
        <img src="/public/noida.jpg" alt="" />
        <h2 className='fs-5 fw-bold primeryColor text-center text-uppercase '>Noida</h2>
        </Link >
        <Link to={'/pg-in-delhi'} className="col-lg-2 col-8 h-full images card p-3 my-lg-0 shadow-md">
          <img src="/public/delhi2.jpg" alt="" />
          <h2 className='fs-5 fw-bold primeryColor text-center'>DELHI</h2>
        </Link >
        <Link to={'/pg-in-gurugram'} className="col-lg-2 col-8 h-full images card p-3 my-lg-0 shadow-md">
        <img src="/public/gurugram.jpg" alt="" />
        <h2 className='fs-5 fw-bold primeryColor text-center text-uppercase '>gurugram</h2>
        </Link >
        <Link to={'/pg-in-grater-noida'} className="col-lg-2 col-8 h-full images card p-3 my-lg-0 shadow-md">
        <img src="/public/noida2.jpg" alt="" />
        <h2 className='fs-5 fw-bold primeryColor text-center text-uppercase '>Greater noida</h2>
        </Link >
        <Link to={'/pg-in-gaziyabad'} className="col-lg-2 col-8 h-full images card p-3 my-lg-0 shadow-md">
        <img src="/public/gaziyabad.jpg" alt="" />
        <h2 className='fs-5 fw-bold primeryColor text-center text-uppercase '>gaziyabad</h2>
        </Link >
      </div>
    </div>
  )
}

export default Prasence