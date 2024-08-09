import React from 'react'

function Contactus() {
  return (
    <div><div className="container-flued  text-white py-3 py-lg-5 contactform overflow-hidden">
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
    </div></div>
  )
}

export default Contactus