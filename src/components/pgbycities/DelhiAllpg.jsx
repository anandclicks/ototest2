import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Amentiesmini from '../Allcitiesindividualpgs/pgone/Amentiesmini'
import Prasence from '../Prasence'

function DelhiAllpg() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="row2 row h35">
      {/* <Link to={'/pg-in-delhi/pgone'} className="hotel-card row p-0 p-lg-2 w-100 col-12 position-relative mt-3 cursor-pointer text-decoration-none text-black">
      <img className="col-12 col-lg-6 thumbnail w-full object-cover" src="/pgone\demo3.jpg" alt="Hotel Image" />
      <div className="col-12 col-lg-6 d-flex justify-content-start justify-content-lg-between">
        <div className="hotel-details d-flex flex-column justify-content-start justify-content-lg-between">
          <div className="w-100 my- my-lg-2">
            <h2 className="fs-3 fw-bold">Lorem ipsum dolor sit amet.</h2>
            <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quod.</p>
          </div>
          <Amentiesmini/>
          <div className="prices w-100 my- my-lg-2">
           
            <p className="price my-2 my-lg-0 fs-4">₹11,000 <span className="original-price">₹16,000</span> 31% off</p>
          </div>
        </div>
        <div className="button-container position-absolute end-0 bottom-0  btnBoxcard m-2">
          <button className="bg-transparent text-black viewDtsl">View Details</button>
          <button className="btn bg-black bookPg">Book Now</button>
        </div>
      </div>
    </Link> */}
      </div>
      </>
  )
}

export default DelhiAllpg