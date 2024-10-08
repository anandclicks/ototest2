import React, { useEffect } from 'react'
import Navbar2 from '../Navbar2'
import Ratting from './Ratting'
import Bookingsummery from './Bookingsummery'
import Amenities from './Amenities'
import DelhiAllpg from '../pgbycities/DelhiAllpg'
import NoidaALLPg from '../pgbycities/NoidaALLPg'
import { Link } from 'react-router-dom'
import GreaterNoida from '../citylist/GreaterNoida'
import GaziyabadALlpg from '../pgbycities/GaziyabadAllPg'


function One() {

  return (
    <>
    <Navbar2/>
    <div className='container-flued  p-0'>
      <div className="row h-100 p-0">
        <div className="col-12 row flex-nowrap p-0 justify-center ps-4 overflow-scroll imgsofone">
        <div className="col-12 col-lg-3 overflow-hidden p-0 h-full"><img className='h-full w-full object-cover ' src="/pgone\deom1.jpg" alt="" /></div>
          <div className="col-12 col-lg-3 overflow-hidden p-0 h-full"><img className='h-full w-full object-cover ' src="/pgone\demo2.jpg" alt="" /></div>
          <div className="col-12 col-lg-3 overflow-hidden p-0 h-full"><img className='h-full w-full object-cover ' src="/pgone\demo3.jpg" alt="" /></div>
          <div className="col-12 col-lg-3 overflow-hidden p-0 h-full"><img className='h-full w-full object-cover ' src="/pgone\demo4.jpg" alt="" /></div>
        </div>
        <div className="col-12 row row2 py-3 ">
          <div className="col-12 col-lg-8 ps-0 ps-lg-4 ps-lg-0 ">
            <h2 className='fwnormal p24px mt-3'>
            Lorem ipsum dolor sit amet. 
            </h2>
            <p className='p text-black-50 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, repellendus?</p>
          <Amenities className={'mt-0'}/>
          <Ratting/>
          </div>
          <div className="col-12 col-lg-4 flex flex-col items-end  pt-5 ">
            
          <form className='col-lg-10 shadow-md p-2 rounded-none h-auto col-12 onejsxform' method="post">
          <h2 className='p24px fw-bold my-3'>Get persolally connect with us.</h2>
          <div className="form-group">
            <input type="text" className="form-control mb-3 bg-transparent text-white py-3" name="" placeholder="Full name" value={''}/>
          </div>
          <div className="form-group">
             
              <input type="text" className="form-control mb-3 bg-transparent text-white py-3" name="" placeholder="Email id" value={''}/>
            </div>    
          <div className="form-group">
            
            <input type="email" className="form-control mb-3 bg-transparent text-white py-3" name="" aria-describedby="emailHelp" placeholder="Mobile number" value={''}/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control mb-3 bg-transparent text-white py-3" name="" placeholder="Select city" value={''}/>
          </div>
          <button type="submit" className="btn primeryBg btn-block w-100 py-3 mt-3 mb-3">Submit</button>
        </form>
       <div className=" col-lg-10 col-12 mt-3 h-50 border-primery">
       <iframe className='h-full w-full' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3504.407924176767!2d77.33931701196641!3d28.557510945521663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMzJzIxLjAiTiA3N8KwMjAnMjEuOCJF!5e0!3m2!1sen!2sin!4v1722497304445!5m2!1sen!2sin"allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </div>
          </div>
        </div>
      </div>
      <DelhiAllpg/>
      <NoidaALLPg/>
      <GaziyabadALlpg/>
    </div>
    </>
  )
}

export default One