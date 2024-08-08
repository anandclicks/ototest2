import React from 'react'
import { Link } from 'react-router-dom'

function PGListings() {
  return (
    <div>
      <div className="container mt-4">
      <div className="row">
      <Link to={'/pg-in-noida/Oto-royalwin-sec104'} className="col-md-3 mb-4 cursor-pointer">
          <div className="cardimg">
            <div className='cardImg'>
            <img src="\Allcitiesindividualpgs\otoroyalwinsec104\IMG-20230522-WA0010.jpg" className="card-img-top h-full w-full object-cover" alt="Zolo Tucana" />
            </div>
            <div className="card-body rounded-xl overflow-hidden shadow-xl p-3">
             <div className='border-b py-2'>
             <h5 className="card-title fwnormal fs-5">Oto Royal Win Sec104</h5>
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
             </div>
              <div className='flex justify-between p-2'>
              <p>
              <p className="card-text fw-light"><strong>Starts at ₹9,154</strong></p>
              <p className="card-text text-info">UPTO 20% OFF</p>
              </p>
              <div className="btn primeryBg  border-none flex items-center px-4">Book now</div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={'/pg-in-noida/Oto-bloom-sec45'} className="col-md-3 mb-4 cursor-pointer">
          <div className="cardimg">
            <div className='cardImg'>
            <img src="\Allcitiesindividualpgs\otobloomsec45\IMG-20240607-WA0050.jpg" className="card-img-top h-full w-full object-cover" alt="Zolo Tucana" />
            </div>
            <div className="card-body rounded-xl overflow-hidden shadow-xl p-3">
             <div className='border-b py-2'>
             <h5 className="card-title fwnormal fs-5">Oto Bloom Sec45</h5>
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
             </div>
              <div className='flex justify-between p-2'>
              <p>
              <p className="card-text fw-light"><strong>Starts at ₹7,154</strong></p>
              <p className="card-text text-info">UPTO 10% OFF</p>
              </p>
              <div className="btn primeryBg  border-none flex items-center px-4">Book now</div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={'/pg-in-noida/Oto-royaltown-sec45'} className="col-md-3 mb-4 cursor-pointer">
          <div className="cardimg">
            <div className='cardImg'>
            <img src="\Allcitiesindividualpgs\otoroyaltownsec45\IMG-20230523-WA0008.jpg" className="card-img-top h-full w-full object-cover" alt="Zolo Tucana" />
            </div>
            <div className="card-body rounded-xl overflow-hidden shadow-xl p-3">
             <div className='border-b py-2'>
             <h5 className="card-title fwnormal fs-5">Oto Royal Town Sec45</h5>
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
             </div>
              <div className='flex justify-between p-2'>
              <p>
              <p className="card-text fw-light"><strong>Starts at ₹4,154</strong></p>
              <p className="card-text text-info">UPTO 18% OFF</p>
              </p>
              <div className="btn primeryBg  border-none flex items-center px-4">Book now</div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={'/pg-in-noida/Oto-capital-sec44'} className="col-md-3 mb-4 cursor-pointer">
          <div className="cardimg">
            <div className='cardImg'>
            <img src="\Allcitiesindividualpgs\otocapitalsec44\IMG-20230806-WA0006.jpg" className="card-img-top h-full w-full object-cover" alt="Zolo Tucana" />
            </div>
            <div className="card-body rounded-xl overflow-hidden shadow-xl p-3">
             <div className='border-b py-2'>
             <h5 className="card-title fwnormal fs-5">Oto Capital Sec44</h5>
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
             </div>
              <div className='flex justify-between p-2'>
              <p>
              <p className="card-text fw-light"><strong>Starts at ₹6,154</strong></p>
              <p className="card-text text-info">UPTO 15% OFF</p>
              </p>
              <div className="btn primeryBg  border-none flex items-center px-4">Book now</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default PGListings