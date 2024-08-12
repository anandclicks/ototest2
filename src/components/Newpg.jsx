import React, { useEffect, useState } from 'react'
import Amenities from '../../src/components/pgone/Amenities'
import PGListings from '../../src/components/PGListings'

function Newpg() {
  const [isFixed, setIsFixed] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [imageNo, setimageNo] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
  
      if (scrollPosition >= 1830) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const NextImgHnadle = ()=> {
    if(imageNo == 10) {
      setimageNo(1)
    }
    else {
      setimageNo(prev => prev + 1)
    }
  }
  const PrevImgHandle = ()=> {
    if(imageNo == 1) {
      setimageNo(9)
    }
    else {
      setimageNo(prev => prev - 1)
    }
  }
  
  return (
    <> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.css" referrerpolicy="no-referrer" />
    <div className='container-flued row2  pgdesigntwo'>
        <div className="row  h-full pgdesigntwoRow">
          {/* left side  */}
          <div className="col-12 col-lg-7 pgdesignLeft ">
            {/* top btn and pg info  */}
          <div className="flex w-full justify-between items-center py-5">
            <div className='flex gap-3 flex-col'>
              <h1> OTO capital sector 44 <i class="ri-heart-line ms-3 fw-light primeryColor"></i></h1>
              <p className='text-black-50 '>Nearby - Esi hospital Sector 22 Noida  </p>
            </div>
            <div className='btn btn-outline-info btnPglocaion'>
              <a target='_blanck' className='text-decoration-none' href="https://maps.app.goo.gl/eqS7HCAztCrnxMgo8"><i class="ri-map-pin-line me-1 fs-5"></i> View in map</a>
            </div>
          </div>
          {/* images and slider  */}
          <div className="imageContainer w-full overflow-hidden">
            <img className='h-full w-full object-cover' src={`/Newpgimg/${imageNo}.jpg`} alt="" />
            <div className='w-full flex justify-between imageCtril'>
              <i onClick={PrevImgHandle} class="ri-arrow-left-s-line fs-1"></i>
              <i onClick={NextImgHnadle} class="ri-arrow-right-s-line fs-1"></i></div>
          </div>
          {/* about property  */}
          <div className="row w-full py-5">
          <p className='primeryColor pb-5'>Home <i class="ri-arrow-right-s-line"></i> Noida <i class="ri-arrow-right-s-line"></i> All PG <i class="ri-arrow-right-s-line"></i> <span className='text-black'>Oto capital</span></p>
          {/* about property  */}
          <div className="box">
            <h2 className='fs-2'>About the <span className='primeryColor'>Property</span></h2>
            <p className='flex flex-col'>
              <span className='mb-3 mt-2'>Discover Your Ideal PG near Bellandur with OTO Nirvana!</span> <br />
             <span className='mb-3'>
             Strategically nestled within a stone's throw away from key office spaces and access roads, OTO Nirvana offers the perfect blend of comfort and convenience. Situated just 1.5 km from RMC Ecospace, 1 km from Central Mall, and SAP Labs Bellandur, and a mere 2 km from Sarjapur Road Signal, our PG is your gateway to seamless living in the heart of Bellandur.
             </span>
              <span className='mb-3'>At OTO Nirvana, we understand the importance of proximity. Whether you're searching for a 'PG near me' or a PG in Bellandur, our prime location ensures easy access to your workplace and essential amenities. With thoughtfully designed living spaces, modern amenities, and a vibrant community, OTO Nirvana redefines PG living.
              </span>
              <span>
              Experience the convenience of urban living with OTO Nirvana. Your search for the perfect PG near Bellandur ends here!
              </span>
</p>
          </div>
          </div>
          {/* rooms dtls  */}
          <div className="row py-3">
            <h2 className='fs-2'>Room <span className='primeryColor'>Detels</span></h2>
            <p className='mt-2'>All room type have some variants that are larger in size or have extra Amenities.</p>
            <div className="priceBox w-full row gap-3 py-4 px-4">
              <div className='bgLightDark col-4 flex flex-col items-center pricingCard p-4  rounded-2xl cursor-pointer'>
              <h2 className='fs-5 py-1'>Private Room</h2>
              <p>starting from</p>
              <span className='fw-bold mt-1'>₹11,000/<span className='fw-light p13px'>Month</span></span>
              </div>
              <div className='bgLightDark col-4 flex flex-col items-center pricingCard p-4  rounded-2xl cursor-pointer'>
              <h2 className='fs-5 py-1'>Double sharing</h2>
              <p>starting from</p>
              <span className='fw-bold mt-1'>₹55,00/<span className='fw-light p13px'>Month</span></span>
              </div>
           
            </div>
          </div>
          {/* wallet  */}
          <div className=" walletPart flex my-2">
          <h2 className='fs-5 py-3 primeryBg px-3 w-full rounded-xl'>DEPOSIT IS THE SAME AS 1 MONTH RENT.</h2>
          </div>
          {/* amenties  */}
          <div className="row pb-5">
            <Amenities/>
          </div>
          {/* map  */}
          <div className="row h-[40vh]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3503.217737472487!2d77.34335387549936!3d28.59324407568618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM1JzM1LjciTiA3N8KwMjAnNDUuMyJF!5e0!3m2!1sen!2sin!4v1723439152269!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          {/* near by facelities */}
          <div className="priceBox nearbyfacelites w-full row items-center py-4 px-4 gap-3 ps-0">
            <h2 className='fs-2 col-12'>Nearby <span className='primeryColor'>Location</span></h2>
              <div className='bgLightDark col-3 flex flex-col items-center gap-4 p-4 rounded-xl'>
              <p>Om deiry</p>
              <h2 className='fwnormal'>20Mtr away</h2>
              </div>
              <div className='bgLightDark col-3 flex flex-col items-center gap-4 p-4 rounded-xl'>
              <p>DLF mall of India</p>
              <h2 className='fwnormal'>15 Min away </h2>
              
              </div>
              <div className='bgLightDark col-3 flex flex-col items-center gap-4 p-4 rounded-xl'>
              <p>Parks and gym</p>
              <h2 className='fwnormal'>15 min away</h2>
              </div>
              
            </div>
          </div>
          {/* right side  */}
          <div className="col-12 col-lg-5 pgdesignRight py-5  ">
            <div className={`pgform ms-0 ms-lg-4 flex  formOfPgReletive col-4 ${isFixed ? 'fixed' : 'scroll'} p-3 px-5`}>
      <form className='w-full' action="">
            <h2 class="text-center p24px fwnormal fs-4">Get a call</h2>
      <div class="form-group my-3">
        <input type="text" placeholder='Full name' class="form-control py-3  "  required />
      </div>
      <div class="form-group my-3">
        <input type="text" placeholder='Mobile number*' class="form-control py-3  " required />
      </div>

      <div class="form-group my-3">
        <select class="form-control py-3 " type="text" name="" id="">
          <option className='text-black-50' selected value="">Room sharing</option>
          <option value="">Single sharing</option>
          <option value="">Double sharing</option>
        </select>
      </div>

      <button type="submit" class="btn primeryBg btn-block py-3 px-5 w-100">Submit</button>
   
      </form>
      <div className="row position-absolute bottom-0 d-flex ms-4 gap-2 flex-nowrap pb-5 justify-between btnsoform px-4">
        <div className="btn btnPglocaion py-3 w-50 w-50">Property Toor <i class="fa-solid fa-video ms-2"></i></div>
        <div className="btn btnPglocaion py-3 w-50 w-50">Call now <i class="fa-solid fa-phone ms-2"></i></div>
      </div>
            </div>
          </div>
        </div>
        <PGListings/>
    </div>
    </>
  )
}

export default Newpg