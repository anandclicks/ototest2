import React,{useEffect,useContext} from 'react'
import { UserContext } from '../../ContextApi/Usercontext'
function Footer() {
  const {setNavstate} = useContext(UserContext)
  useEffect(()=> {
    setNavstate(false)
  },[])
  return (
    <div className='h35two footer flex items-center'>
      
      <footer className='w-full text-white'>
            <div className="container h-100">
              <div className="row  h-100 ">
                  <div className="col-md-4">
                      <div className="content-box">
                       <img className='flogo' src="/otologo2.png" alt="oto"/>
                          <p className='mt-4`'>
                              You know, when we go out of our home to the city in search of studies and jobs, we get everything very easily but we do not get a happy home.
                          </p>
                          <p>Follow us at</p>
                          <div className="d-flex gap-4 fs-3 mt-5">
                              <i className="fa-brands fa-facebook"></i>
                              <i className="fa-brands fa-square-instagram"></i>
                              <i className="fa-brands fa-twitter"></i>
                              <i className="fa-brands fa-linkedin"></i>
                              <i className="fa-brands fa-youtube"></i>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4 pt-4 flex justify-center">
                      <div className="contact-info ">
                          <h5 className='fw-bold fs-3'>Useful Links</h5>
                          <ul className="list-unstyled d-flex flex-column">
                              <li className="my-1"><i className="ri-arrow-right-line"></i> Home</li>
                              <li className="my-1"><i className="ri-arrow-right-line"></i> About Us</li>
                              <li className="my-1"><i className="ri-arrow-right-line"></i> Blog</li>
                              <li className="my-1"><i className="ri-arrow-right-line"></i>All PG'S for you</li>
                              <li className="my-1"><i className="ri-arrow-right-line"></i> User Policy</li>
                              <li className="my-1"><i className="ri-arrow-right-line"></i>PG in Delhi</li>
                              <li className="my-1"><i className="ri-arrow-right-line"></i>PG in Noida</li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-md-4 pt-3">
                    <h5 className='fw-bold fs-3'>Contact Information</h5>
                    <div className="d-flex gap-2 align-items-center my-3">
                      <i className="fa-solid fa-map fs-2"></i>
                      <p><strong>Address</strong><br/>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, aliquid!
                    </p>
                    </div>
                   <div className="d-flex gap-2 align-items-center my-3">
                    <i className="fa-solid fa-phone fs-2"></i>
                    <p><strong>Phone Number</strong><br/>
                      +91 0000000000
                  </p>
                   </div>
                   <div className="d-flex gap-2 align-items-center my-3">
                    <i className="fa-solid fa-envelope fs-2"></i>
                     <p><strong>Email Address</strong><br/>
                         company@gmail.com
                     </p>
                   </div>
                  </div>
              </div>
          </div>
           </footer>
   
    </div>
  )
}

export default Footer