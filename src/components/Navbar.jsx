import React, { useContext,useEffect } from 'react'
import { UserContext } from '../../ContextApi/Usercontext'
import { Link } from "react-router-dom";
import Listproperty from './Listproperty';
function Navbar() {
  useEffect(()=> {
    setNavstate(prevState => !prevState)
  },[])
  const toggleNavstate = () => {
    setNavstate(prevState => !prevState);
  };
  const {Navstate,setNavstate} = useContext(UserContext)
  const {Formstate, setFormstate} = useContext(UserContext)
  return (
    <>
      <Listproperty/>
    <div className='container-flued navMain z-40 position-reletive position-fixed w-full bg-white'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <div className="row row2 h-full">
        <div className="col-lg-4 col-6 navLeft">
         <Link to={'/'}>
         <img className='logo rounded-5' src="/otologo.png" alt="" />
         </Link>
        </div>
        <div className="col-lg-6 d-lg-flex d-none items-center"> <ul className='list-unstyld flex gap-5  d-lg-flex d-none fwnormal'>
          <Link to={'/explorepgs'} className=' cursor navbarLink text-black'>Explore PG</Link>
            <Link to={'/aboutus'} className=' cursor navbarLink text-black'>About Us</Link>
            <Link to={'/contactUs'}  className=' cursor navbarLink text-black'>Contact us</Link> 
            <Link to={'/'} className=' cursor navbarLink text-black'>+91 7415051778</Link>
          </ul></div>
        <div className="col-lg-2 col-6 navRight justify-end ">
            <div onClick={()=> setFormstate(true)} className="btn primeryBg border-none rounded-none py-2 flex items-center px-4 fw-light  d-none d-lg-flex">List Property</div>
          <i onClick={toggleNavstate} className="fa-solid fa-bars menuBar p24px d-flex d-lg-none me-3 me-lg-0"></i>
          <div className={`col-12  d-flex d-lg-flex mobileMenu d-flex d-lg-none flex-column align-items-start justify-content-between ${Navstate ? 'navOn' : 'navOff' }`}>
      <ul className="list-unstyled d-flex flex-column bg-black gap-3 p-3 col-8 h-100 shadow-lg text-white">
      <Link to={'/explorepgs'} >Explore PG</Link>
      <Link to={'/aboutus'} >About Us</Link>
      <Link to={'/contactUs'}>Contact us</Link>
      <Link to={'/'} >+90 000000000</Link>
      <Link to={'/'} >property@gmail.com</Link>
      </ul>

    </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar