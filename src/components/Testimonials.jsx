import React, { useEffect, useState } from 'react';
import Contactus from './Contactus';

function Testimonials() {
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackwardClick = () => {
    setTranslateX((prevTranslateX) => prevTranslateX - 100);
  };

  const handleForwardClick = () => {
    setTranslateX((prevTranslateX) => prevTranslateX + 100);
  };

  return (
    <>
      <div className="container-flued h-[100vh] h-Auto testimonails h-Auto ">
        <div className="custom-shape-divider-top-1722606489">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="h-full row2 testimonialsMain col-12 row flex-n">
          <div className="col-12 col-lg-4 h-full flex items-center">
            <div className="minicircle flex items-center">
              <img src="https://t3.ftcdn.net/jpg/04/57/14/78/360_F_457147888_pSliU0XoZWUhxck269jYeCGmdWURjFV1.jpg" alt="" />
            </div>
          </div>
          <div className="col-12 col-lg-8 h-full flex items-center justify-center ps-0 m-0 pb-5">
            <div className="testimonialsBox p-0 mt-5 pt-5 w-full">
              <h1 className="text-center">
                <span className="hiligtedText pt-5">Testimonials</span> <br />
                People are talking.
              </h1>
              {/* testimonial slider  */}
              <div className="w-full row  p-0 p-lg-3 ">
                {/* semi wrapper  */}
                
                  <div className="col-12 col-lg-6 flex row overflow-hidden testimonialWrapper p-0 justify-center m-0 ">
                    <div className="review p-3 mb-3 border rounded col-12 col-lg-10 feedback shadow-sm">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h5 className="mb-1 fs-5">
                            <i className="fa-solid fa-user"></i> Forever
                          </h5>
                          <small>29 Apr 2024</small>
                        </div>
                        <div className="text-success">
                          <span>&#9733;</span>
                          <span>&#9733;</span>
                          <span>&#9733;</span>
                          <span>&#9733;</span>
                          <span>&#9733;</span>
                        </div>
                      </div>
                      <p className="mt-2 t15px ">
                        The food at this hotel is absolutely delicious, with a wide variety of options to cater to every taste. The check-in
                        experience was smooth and hassle-free, making me feel welcome and valued. The staff were extremely helpful andl.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 flex row overflow-hidden testimonialWrapper p-0 justify-center m-0 ">
                    <div className="review p-3 mb-3 border rounded col-12 col-lg-10 feedback shadow-sm">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h5 className="mb-1 fs-5">
                            <i className="fa-solid fa-user"></i> me@123
                          </h5>
                          <small>29 Apr 2024</small>
                        </div>
                        <div className="text-success">
                          <span>&#9733;</span>
                          <span>&#9733;</span>
                          <span>&#9733;</span>
                          <span>&#9733;</span>
                          <span>&#9733;</span>
                        </div>
                      </div>
                      <p className="mt-2 t15px ">
                        The food at this hotel is absolutely delicious, with a wide variety of options to cater to every taste. The check-in
                        experience was smooth and hassle-free, making me feel welcome and valued. The staff were extremely helpful and
                     
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 flex row overflow-hidden testimonialWrapper p-0 justify-center m-0 ">
                    <div className="review p-3 mb-3 border rounded col-12 col-lg-10 feedback shadow-sm">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h5 className="mb-1 fs-5">
                            <i className="fa-solid fa-user"></i> Youe@123
                          </h5>
                          <small>29 Apr 2024</small>
                        </div>
                        <div className="text-success">
                          <span>&#9733;</span>
                          <span>&#9733;</span>
                          <span>&#9733;</span>
                          <span>&#9733;</span>
                          <span>&#9733;</span>
                        </div>
                      </div>
                      <p className="mt-2 t15px ">
                        The food at this hotel is absolutely delicious, with a wide variety of options to cater to every taste. The check-in
                        experience was smooth and hassle-free, making me feel welcome and valued. The staff were extremely helpful and
                      
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 flex row overflow-hidden testimonialWrapper p-0 justify-center m-0 ">
                    <div className="review p-3 mb-3 border rounded col-12 col-lg-10 feedback shadow-sm">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h5 className="mb-1 fs-5">
                            <i className="fa-solid fa-user"></i> Youe@123
                          </h5>
                          <small>29 Apr 2024</small>
                        </div>
                        <div className="text-success">
                          <span>&#9733;</span>
                          <span>&#9733;</span>
                          <span>&#9733;</span>
                          <span>&#9733;</span>
                          <span>&#9733;</span>
                        </div>
                      </div>
                      <p className="mt-2 t15px ">
                        The food at this hotel is absolutely delicious, with a wide variety of options to cater to every taste. The check-in
                        experience was smooth and hassle-free, making me feel welcome and valued. The staff were extremely helpful and
                      
                      </p>
                    </div>
                  </div>
                </div>
              </div>
             
          </div>
        </div>
      </div>
      <Contactus/>
    </>
  );
}

export default Testimonials;
