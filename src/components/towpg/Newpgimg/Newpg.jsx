import React, { useEffect, useState } from 'react'
import Amenities from '../../pgone/Amenities'
import PGListings from '../../PGListings'

function Newpg() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [imageNo, setimageNo] = useState(6)
  const [Formstate, setFormstate] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop >= 1861) {
        setFormstate(true);
      } else {
        setFormstate(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const NextImgHnadle = ()=> {
    if(imageNo == 9) {
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
              <h1>Oto Bloom <i class="ri-heart-line ms-3 fw-light primeryColor"></i></h1>
              <p className='text-black-50 '>Lorem ipsum dolor sit amet  </p>
            </div>
            <div className='btn btn-outline-info btnPglocaion'>
            <i class="ri-map-pin-line me-1 fs-5"></i> View in map
            </div>
          </div>
          {/* images and slider  */}
          <div className="imageContainer w-full overflow-hidden">
            <img className='h-full w-full object-cover' src={`src/components/towpg/Newpgimg/${imageNo}.jpg`} alt="" />
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
            <div className="priceBox w-full row justify-between py-4 px-4">
              <div className='bgLightDark col-3 flex flex-col items-center p-4  rounded-2xl'>
              <h2 className='fs-5 py-1'>Private Room</h2>
              <p>starting from</p>
              <span className='fw-bold mt-1'>₹21336/<span className='fw-light p13px'>Month</span></span>
              </div>
              <div className='bgLightDark col-3 flex flex-col items-center p-4  rounded-2xl'>
              <h2 className='fs-5 py-1'>Private Room</h2>
              <p>starting from</p>
              <span className='fw-bold mt-1'>₹21336/<span className='fw-light p13px'>Month</span></span>
              </div>
              <div className='bgLightDark col-3 flex flex-col items-center p-4  rounded-2xl'>
              <h2 className='fs-5 py-1'>Private Room</h2>
              <p>starting from</p>
              <span className='fw-bold mt-1'>₹21336/<span className='fw-light p13px'>Month</span></span>
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
          <iframe className='h-full w-full' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3504.407924176767!2d77.33931701196641!3d28.557510945521663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMzJzIxLjAiTiA3N8KwMjAnMjEuOCJF!5e0!3m2!1sen!2sin!4v1722497304445!5m2!1sen!2sin"allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          {/* near by facelities */}
          <div className="priceBox nearbyfacelites w-full row items-center py-4 px-4 gap-3 ps-0">
            <h2 className='fs-2 col-12'>Nearby <span className='primeryColor'>Location</span></h2>
              <div className='bgLightDark col-3 flex flex-col items-center gap-4 p-4 rounded-xl'>
              <p>Om deiry</p>
              <h2 className='fwnormal'>20Mtr km away</h2>
              </div>
              <div className='bgLightDark col-3 flex flex-col items-center gap-4 p-4 rounded-xl'>
              <p>Metro station</p>
              <h2 className='fwnormal'>5 min away </h2>
              
              </div>
              <div className='bgLightDark col-3 flex flex-col items-center gap-4 p-4 rounded-xl'>
              <p>DLF Mall of India</p>
              <h2 className='fwnormal'>15 min away</h2>
              </div>
              
            </div>
          </div>
          {/* right side  */}
          <div className="col-12 col-lg-5 pgdesignRight py-5 ">
            <div className={`pgform ms-0 ms-lg-5 flex items-center  ${Formstate ? 'formOfPgReletive' : 'formOfPgFixed'} p-3 px-5`}>
      <form className='w-full' action="">
            <h2 class="text-center p24px fwnormal fs-4">Get a call</h2>
      <div class="form-group">
        <input type="text" class="form-control py-3  my-4" placeholder="Name*" required />
      </div>
      <div class="form-group">
        <input type="text" class="form-control py-3  my-4" placeholder="Mobile number*" required />
      </div>
      <div class="form-group">
        <input class="form-control py-3  my-4" placeholder="Property location" type="text" name="" id=""/>
      </div>


      <button type="submit" class="btn primeryBg btn-block py-2 px-5 w-100">Submit</button>
    <p class="mt-3 text-center">Need Assistance? Call at <a class="text-decoration-none text-dark" href="tel:+91 9599050903">+91 7415051778</a></p>
      </form>
            </div>
          </div>
        </div>
        <PGListings/>
    </div>
    </>
  )
}

export default Newpg