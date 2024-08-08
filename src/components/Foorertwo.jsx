import React from 'react'
import { Link } from 'react-router-dom'

function Foorertwo() {
  return (
    <div>

<footer className="custom-footer bg-light text-dark pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4 ">
            <h6 className="custom-footer-heading p-3 pt-0 t24px ps-0 fwnormal">Locate <span className="custom-footer-highlight">Us</span></h6>
            <p className='flex gap-2 t15px'>
              <i className="fas fa-map-marker-alt p24px"></i> 
              <p className='t15px'>Nearby Radha public school <br />
              Nearby - Esi hospital Sector 22 Noida</p>
              </p>
            <p><i className="fas fa-envelope"></i> kayanthusainotostays@gmail.com</p>
            <p><i className="fas fa-phone"></i> +91-98 6736 3886</p>
          </div>
          <div className="col-md-3 mb-4">
            <h6 className="custom-footer-heading t24px fwnormal">Useful Links</h6>
            <div class="line-with-dots"><div class="line"></div></div>
            <ul className="custom-footer-list list-unstyled flex flex-col gap-2 t15px">
              <Link to={'/'}>Home</Link>
              <Link to={'/aboutus'}>About us</Link>
              <Link to={'/explorepgs'}>Explore PG</Link>
              <Link to={'/contactUs'}>Book PG</Link>
              <Link to={'/contactUs'}>Contact us</Link>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h6 className="custom-footer-heading t24px fwnormal">Explore PG</h6>
            <div class="line-with-dots"><div class="line"></div></div>
            <ul className="custom-footer-list list-unstyled flex flex-col gap-2 t15px">
              <Link to={'/pg-in-delhi'}>PG In Delhi</Link>
              <Link to={'/pg-in-noida'}>PG In Noida</Link>
              <Link to={'/pg-in-gurugram'}>PG In Gurugram</Link>
              <Link to={'/pg-in-gaziyabad'}>PG In Ghaziabad</Link>
              <Link to={'/pg-in-grater-noida'}>PG In Greater Noiad</Link>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h6 className="custom-footer-heading  fwnormal t24px">Connect Us</h6>
            <div class="line-with-dots"><div class="line"></div></div>
           <ul className='flex flex-col gap-2 t15px'>
           <Link>Instagram</Link>
            <Link>Facebook</Link>
            <Link>Linkdin</Link>
            <Link>Twitter</Link>
            <Link>Youtube</Link>
           </ul>
            
          </div>
        </div>
      </div>
      <div className="container-flued">
      <div className="text-center mt-4 bg-black text-white py-3">
          <p className="mb-0">&copy; OTO Stays. Copyright 2024 | All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Foorertwo