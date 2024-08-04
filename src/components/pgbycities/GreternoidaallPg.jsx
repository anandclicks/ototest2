import React, { useEffect } from 'react'
import Amentiesmini from '../pgone/Amentiesmini'
import Prasence from '../Prasence'
import { Link } from 'react-router-dom';

function GreternoidaallPg() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
 
      <>
      {/* <Link className="row2 row h35">
      <div  className="hotel-card row p-0 p-lg-2 w-100 col-12 position-relative mt-3 cursor-pointer text-decoration-none text-black">
      <img className="col-12 col-lg-6 thumbnail" src="./noida2.jpg" alt="Hotel Image" />
      <div className="col-12 col-lg-6 d-flex justify-content-start justify-content-lg-between">
        <div className="hotel-details d-flex flex-column justify-content-start justify-content-lg-between">
          <div className="w-100 my- my-lg-2">
            <h2 className="fs-3">Lorem ipsum dolor sit amet consectetur.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ipsa?</p>
          </div>
          <Amentiesmini/>
          <div className="prices w-100 my- my-lg-2">
            <p>+ ₹108 taxes & fees • per room per night</p>
            <p className="price my-2 my-lg-0 fs-5">₹562 <span className="original-price">₹2362</span> 71% off</p>
          </div>
        </div>
        <div className="button-container position-absolute end-0 bottom-0  btnBoxcard">
          <button className="bg-transparent text-black viewDtsl">View Details</button>
          <button className="btn bg-black bookPg">Book Now</button>
        </div>
      </div>
    </div>
  
      </Link> */}
      </>
  )
}

export default GreternoidaallPg