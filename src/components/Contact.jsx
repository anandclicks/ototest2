import React from 'react'


function Contact() {
  return (
    <>
   <div className="container-flued  text-white py-5 contactform ">
   <div className="container mt-5 position-reletive">
            <div className="row">
                <div className="col-md-6">
                    <h1 className='my-3'>Need Help?</h1>
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
                <div className="col-md-6 flex  flex-col">
                  <div>
                  <h1 className='fs-2'>Contact information</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, perferendis!</p>
                  </div>
             <div className="box mt-0 mt-lg-5 ms-0 ms-lg-5">
              <div className='flex gap-2 m-4 ms-0'>
              <i class="fa-solid fa-map bg-white text-black p-3 rounded-circle"></i>Nearby Radha public school <br />
              Nearby - Esi hospital Sector 22 Noida
              </div>
              <div className=' flex flex-col gap-4'>
                <div >
                <i class="fa-solid fa-envelope bg-white text-black p-3 rounded-circle me-2"></i> kayanthusainotostays@gmail.com
                </div>
                <div>
                <i class="fa-solid fa-phone bg-white text-black p-3 rounded-circle me-2"></i>+91 7415051778
                </div>
              </div>
             </div>
                </div>
            </div>
        </div>
   </div>
   <div className="container-flued h-[50vh] my-5">
        <iframe className='h-full w-full' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3504.407924176767!2d77.33931701196641!3d28.557510945521663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMzJzIxLjAiTiA3N8KwMjAnMjEuOCJF!5e0!3m2!1sen!2sin!4v1722497304445!5m2!1sen!2sin"allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

    </>
  )
}

export default Contact