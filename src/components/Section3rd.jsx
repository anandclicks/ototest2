import React, { useEffect } from 'react'

function Section3rd() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='containr-flued h60 section3rd py-5'>
      <div className="row row2 h-100 flex-wrap ">
        <div className=" col-12 col-lg-6 herordleft  h-100  flex flex-wrap">
        
         <div className="col-12 col-lg-6 section3rdleftimg p-2">
            <img className='object-cover h-full w-full rounded-xl' src="/public/herosectionimg/one.jpg" alt="" />
          </div>
          <div className="col-12 col-lg-6 h-full d-none d-lg-flex flex-col">
            <div className="col-12   p-2">
              <img className='rounded-xl ' src="/public/herosectionimg/two.jpg" alt="" />
            </div>
            <div className="col-12 p-2">
              <img className='rounded-xl ' src="/public/herosectionimg/three.jpg" alt="" />
            </div>
          </div>
        
        </div>
        <div className="col-12 col-lg-6  herorfright flex justify-end ">
          <div className="">
            <h1><span className='hiligtedText ps-0'>Start living</span> your best <br /> life from day one</h1>
            <img className='w-80 mt-5' src="/assets\section3rd_rightbg.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex w-100  p-4 fs-5 bgMainLight text-white  mt-5 d-none">
            <div className="container flex justify-between fs-3">
            <div className='text-center textshadow'>
              10K <br /> Customers
            </div>
            <div className='text-center textshadow'>
            250+ <br /> Oto Habitats
            </div>
            <div className='text-center textshadow'>
            6+ <br /> Cities & Counting
            </div>
            </div>
          </div>
    </div>
  )
}

export default Section3rd