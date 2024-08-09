import React, { useEffect, useState } from 'react';

function Testimonials() {
  const [translateX, setTranslateX] = useState(5);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackwardClick = () => {
    setTranslateX((prevTranslateX) => prevTranslateX - 70);
  };

  const handleForwardClick = () => {
    setTranslateX((prevTranslateX) => prevTranslateX + 70);
  };

  return (
    <>
      <div className="container-flued h-[100vh] h-Auto testimonails h-Auto">
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
            <div className="minicircle"></div>
          </div>
          <div className="col-12 col-lg-8 h-full flex items-center justify-center ps-0 m-0 overflow-hidden">
            <div className="testimonialsBox p-0 mt-5 pt-5 w-full">
              <h1 className="text-center">
                <span className="hiligtedText pt-5">Testimonials</span> <br />
                People are talking.
              </h1>
              {/* testimonial slider  */}
              <div className="w-full flex flex-nowrap p-0 p-lg-3 overflow-">
                {/* semi wrapper  */}
                <div className="semiwrapper flex" style={{ transform: `translateX(${translateX}%)` }}>
                  <div className="col-6 col-lg-8 flex row flex-nowrap overflow-hidden testimonialWrapper p-0 justify-end m-0 ">
                    <div className="review p-3 mb-3 border rounded col-12 col-lg-10 feedback">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h5 className="mb-1">
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
                      <p className="mt-2">
                        The food at this hotel is absolutely delicious, with a wide variety of options to cater to every taste. The check-in
                        experience was smooth and hassle-free, making me feel welcome and valued. The staff were extremely helpful and
                        friendly, always going above and beyond to ensure my stay was comfortable and enjoyable. I highly recommend this
                        hotel.
                      </p>
                    </div>
                  </div>
                  <div className="col-6  col-lg-8 flex row flex-nowrap overflow-hidden testimonialWrapper p-0 justify-end m-0 ">
                    <div className="review p-3 mb-3 border rounded col-12 col-lg-10 feedback">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h5 className="mb-1">
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
                      <p className="mt-2">
                        The food at this hotel is absolutely delicious, with a wide variety of options to cater to every taste. The check-in
                        experience was smooth and hassle-free, making me feel welcome and valued. The staff were extremely helpful and
                        friendly, always going above and beyond to ensure my stay was comfortable and enjoyable. I highly recommend this
                        hotel.
                      </p>
                    </div>
                  </div>
                  <div className="col-6  col-lg-8 flex row flex-nowrap overflow-hidden testimonialWrapper p-0 justify-end m-0 ">
                    <div className="review p-3 mb-3 border rounded col-12 col-lg-10 feedback">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h5 className="mb-1">
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
                      <p className="mt-2">
                        The food at this hotel is absolutely delicious, with a wide variety of options to cater to every taste. The check-in
                        experience was smooth and hassle-free, making me feel welcome and valued. The staff were extremely helpful and
                        friendly, always going above and beyond to ensure my stay was comfortable and enjoyable. I highly recommend this
                        hotel.
                      </p>
                    </div>
                  </div>
                  <div className="col-6  col-lg-8 flex row flex-nowrap overflow-hidden testimonialWrapper p-0 justify-end m-0 ">
                    <div className="review p-3 mb-3 border rounded col-12 col-lg-10 feedback">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h5 className="mb-1">
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
                      <p className="mt-2">
                        The food at this hotel is absolutely delicious, with a wide variety of options to cater to every taste. The check-in
                        experience was smooth and hassle-free, making me feel welcome and valued. The staff were extremely helpful and
                        friendly, always going above and beyond to ensure my stay was comfortable and enjoyable. I highly recommend this
                        hotel.
                      </p>
                    </div>
                  </div>
                  <div className="col-6  col-lg-8 flex row flex-nowrap overflow-hidden testimonialWrapper p-0 justify-end m-0 ">
                    <div className="review p-3 mb-3 border rounded col-12 col-lg-10 feedback">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h5 className="mb-1">
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
                      <p className="mt-2">
                        The food at this hotel is absolutely delicious, with a wide variety of options to cater to every taste. The check-in
                        experience was smooth and hassle-free, making me feel welcome and valued. The staff were extremely helpful and
                        friendly, always going above and beyond to ensure my stay was comfortable and enjoyable. I highly recommend this
                        hotel.
                      </p>
                    </div>
                  </div>
                  <div className="col-6  col-lg-8 flex row flex-nowrap overflow-hidden testimonialWrapper p-0 justify-end m-0 ">
                    <div className="review p-3 mb-3 border rounded col-12 col-lg-10 feedback">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h5 className="mb-1">
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
                      <p className="mt-2">
                        The food at this hotel is absolutely delicious, with a wide variety of options to cater to every taste. The check-in
                        experience was smooth and hassle-free, making me feel welcome and valued. The staff were extremely helpful and
                        friendly, always going above and beyond to ensure my stay was comfortable and enjoyable. I highly recommend this
                        hotel.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 w-full flex justify-center gap-5 p24px fw-l testimonialCtrlicon">
                <i
                  className="p-3 rounded-circle border border-black cursor-pointer fa-solid fa-backward"
                  onClick={handleForwardClick}
                ></i>
                <i
                  className="p-3 rounded-circle border border-black cursor-pointer fa-solid fa-forward"
                  onClick={handleBackwardClick}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-flued  text-white py-3 py-lg-5 contactform overflow-hidden">
   <div className="container mt-0 mt-lg-5 position-reletive">
            <div className="row">
                <div className="col-md-6">
                    <h1 className='my-3 fs-2 mb-0'>Need Help?</h1>
                    <div class="line-with-dots ms-5"><div class="line"></div></div>
                    <h2 className='fs-3 fwnormal'>Contact Us Now</h2>
                    <p className='my-3'>If you have got any questions, please do not hesitate to send us a message. We will reply shortly as soon as possible.</p>
                    <form>
                        <div className="mb-3">
                            <input type="text" className="form-control contactInput" placeholder="Your Name" />
                        </div>
                       <div className='flex w-full gap-3'>
                       <div className="mb-3 w-50">
                            <input type="email" className="form-control contactInput" placeholder="Email Address" />
                        </div>
                        <div className="mb-3 w-50">
                            <input type="text" className="form-control contactInput" placeholder="Phone Number" />
                        </div>
                       </div>
                        <div className="mb-3">
                            <textarea className="form-control contactInput contactInputTextaria" placeholder="Your Message" rows="4"></textarea>
                        </div>
                        <button type="submit" className="btn primeryBg border-none rounded-none px-3 py-3">Submit Now</button>
                    </form>
                </div>
                <div className="col-md-6 flex  flex-col justify-center items-center">
             <div className="box mb-2 mb-lg-5 mt-2 mt-lg-0">
             <div className='mb-2 mb-lg-5 mt-5 mt-lg-0'>
                  <h1 className='fs-3 mb-2 mb-lg-4'>Contact information</h1>
                  <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, perferendis!</p>
                  </div>
              <div className='flex gap-2 flex-wrap m-4 ms-0'>
              <i class="fa-solid fa-map bg-white text-black p-3 rounded-circle me-0 me-lg-3"></i>Nearby Radha public <br /> school 
              Nearby - Esi hospital Sector 22 Noida
              </div>
              <div className=' flex flex-col gap-4'>
                <div >
                <i class="fa-solid fa-envelope bg-white text-black p-3 rounded-circle me-3"></i> kayanthusainotostays@gmail.com
                </div>
                <div>
                <i class="fa-solid fa-phone bg-white text-black p-3 rounded-circle me-3"></i>+91 7415051778
                </div>
              </div>
             </div>
                </div>
            </div>
        </div>
   </div>
    </>
  );
}

export default Testimonials;
