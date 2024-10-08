import React, { useEffect } from 'react'
import Navbar2 from '../Navbar2'
import Prasence from '../Prasence';
import GaziyabadALlpg from '../pgbycities/GaziyabadAllPg';

function Gaziyabad() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
   <>
    <div className='container-flued h80'>
      <Navbar2/>
      <div className="row2 row h-full flex-col-reverse flex-lg-row mt-2 mt-lg-5">
        <div className="col-lg-6 col-12 pgdelhiLeft">
          <h1 className='fwLight'>Looking for a PG in Noida? Please DON'T! <span className='primeryColor'>You deserve better.</span></h1>
          <p className='p'>Discover a new way of living in an Oto Stays community, where modern comfort and vibrant connections seamlessly blend, creating a unique and inclusive living experience that's second to none.</p>
          <div className="row gap-2 mt-3">
          <div className="col-12 col-lg-4 flex  items-end p-2 bg-black text-white rounded-lg">
           <img className='facelityImg' src="\PgFacelities\food-subscriptions.svg" alt="" />
           <p>food Subscriptions</p>
          </div>
          <div className="col-12 col-lg-4 flex  items-end p-2 bg-black text-white rounded-lg">
           <img className='facelityImg' src="\PgFacelities\free-housekeeping.svg" alt="" />
           <p>free Housekeeping</p>
          </div>
          <div className="col-12 col-lg-4 flex  items-end p-2 bg-black text-white rounded-lg">
           <img className='facelityImg' src="\PgFacelities\free-maintenance.svg" alt="" />
           <p>free Maintenance</p>
          </div>
          <div className="col-12 col-lg-4 flex  items-end p-2 bg-black text-white rounded-lg">
           <img className='facelityImg' src="\PgFacelities\fully-furnished.svg" alt="" />
           <p>fully Furnished</p>
          </div>
          <div className="col-12 col-lg-4 flex  items-end p-2 bg-black text-white rounded-lg">
           <img className='facelityImg' src="\PgFacelities\no-lock-in.svg" alt="" />
           <p>No Lock In</p>
          </div>
          <div className="col-12 col-lg-4 flex  items-end p-2 bg-black text-white rounded-lg">
           <img className='facelityImg' src="\PgFacelities\ready-to-move-in.svg" alt="" />
           <p>Ready to move in</p>
          </div>
          <div className="col-12 col-lg-4 flex  items-end p-2 bg-black text-white rounded-lg">
           <img className='facelityImg' src="\PgFacelities\security-deposit.svg" alt="" />
           <p>security deposit</p>
          </div>
          </div>
          <div className="flex w-100 justify-between p-2 p-lg-5 ps-lg-0 p24px ">
            <div className='text-center'>
              10K <br /> Happy customer
            </div>
            <div className='text-center'>
            250+ <br /> Oto Habitats
            </div>
            <div className='text-center'>
            6+ <br /> Cities & Counting
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12 pgdelhiRight">
          <img className='rounded-3' src="\Cityimages\ghaziabad.jpg" alt="" />
        </div>
      </div>
    </div>
    <GaziyabadALlpg/>
    <Prasence/>
   </>
  )
}

export default Gaziyabad