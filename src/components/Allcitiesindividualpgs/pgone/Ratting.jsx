import React from 'react'

function Ratting() {
  return (
    <div> 
       {/* <div className="room-selection container mt-4">
    <h4 className="section-title">Choose your room</h4>
    <div className="selected-category d-flex align-items-center p-2 mb-3">
      <i className="bi bi-star-fill me-2"></i>
      <span className="category-text">⭐SELECTED CATEGORY</span>
    </div>

    <div className="room-card border rounded p-3 d-flex justify-content-between align-items-center">
      <div className="room-info">
        <h5 className="room-title mb-2">Classic <i className="bi bi-check-circle-fill text-success"></i></h5>
        <p className="room-size">Room size: 100 sqft</p>
        <div className="room-amenities d-flex">
          <div className="me-3">
             <i className='fas fa-wifi'></i>Wi-Fi
          </div>
          <div>
            <i class="fa-solid fa-tv"></i> TV
          </div>
        </div>
        <div className="price mt-3">
          <span className="new-price">₹768</span> <span className="old-price text-muted"><s>₹3507</s></span>
          <p className="p">+ ₹132 taxes & fee</p>
        </div>
      </div>
      <div>
      <div className="room-image">
        <img src="/Allcitiesindividualpgs\pgone\pgone2.jpg" alt="Room" className="img-fluid rounded w-60" />
      </div>
      <div className="selected-button">
        <button className="btn bgDone bg-light border-dark rounded-none py-2 w-100 mt-2">
          <i className="bi bi-check-circle-fill me-2"></i>SELECTED <i class="fa-solid fa-check bg-green-500 text-white rounded-circle p-1"></i>
        </button>
      </div>
      </div>
    </div>
  </div> */}
      <div className="container mt-5">
        <h2 className='fs-3 fw-bold'>Ratings and reviews</h2>
        <div className="rating-summary">
          <div className="d-flex align-items-center mb-2">
            <span className="badge badge-success bg-black  p-2 mt-2 fs-5">4.6 ★</span>
            
          </div>
          <div className="rating-breakdown">
            <div className="d-flex align-items-center">
              <span>5 ★</span>
              <div className="progress w-75 mx-2">
                <div
                  className="progress-bar bookPg"
                  role="progressbar"
                  style={{ width: '66%' }}
                  aria-valuenow="66"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <span>66%</span>
            </div>
            <div className="d-flex align-items-center">
              <span>4 ★</span>
              <div className="progress w-75 mx-2">
                <div
                  className="progress-bar bookPg"
                  role="progressbar"
                  style={{ width: '16%' }}
                  aria-valuenow="16"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <span>16%</span>
            </div>
            <div className="d-flex align-items-center">
              <span>3 ★</span>
              <div className="progress w-75 mx-2">
                <div
                  className="progress-bar bookPg"
                  role="progressbar"
                  style={{ width: '16%' }}
                  aria-valuenow="16"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <span>16%</span>
            </div>
            <div className="d-flex align-items-center">
              <span>2 ★</span>
              <div className="progress w-75 mx-2">
                <div
                  className="progress-bar bookPg"
                  role="progressbar"
                  style={{ width: '0%' }}
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <span>0%</span>
            </div>
            <div className="d-flex align-items-center">
              <span>1 ★</span>
              <div className="progress w-75 mx-2">
                <div
                  className="progress-bar bookPg"
                  role="progressbar"
                  style={{ width: '0%' }}
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <span>0%</span>
            </div>
          </div>
        </div>
        {/* <div className="review mt-4">
          <div className="d-flex align-items-center">
            <div className="review-author">
              <img
                src="https://via.placeholder.com/50"
                alt="Reviewer"
                className="rounded-circle"
              />
              <div className="ml-3">
                <h5 className="mb-0">Dipesh</h5>
                <small>04 Jul 2024</small>
              </div>
            </div>
            <span className="badge badge-success ml-auto p-2">5 ★</span>
          </div>
          <div className="review-text mt-3">
            <p>
              Absolutely brilliant! The hotel is impeccably clean, the check-in
              experience was seamless, and the staff was exceptionally helpful. A
              perfect 5-star experience!
            </p>
          </div>
        </div> */}
      </div>
      <div className="container mt-4">
    <div className="review p-3 mb-3 border rounded">
      <div className="d-flex justify-content-between">
        <div>
          <h5 className="mb-1"><i class="fa-solid fa-user"></i> Forever</h5>
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
        The food at this hotel is absolutely delicious, with a wide variety of options to cater to every taste. The check-in experience was smooth and hassle-free, making me feel welcome and valued. The staff were extremely helpful and friendly, always going above and beyond to ensure my stay was comfortable and enjoyable. I highly recommend this hotel.
      </p>
    </div>

    <div className="review p-3 mb-3 border rounded">
      <div className="d-flex justify-content-between">
        <div>
          <h5 className="mb-1"><i class="fa-solid fa-user"></i> Surya Prasad</h5>
          <small>19 Jul 2024</small>
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
        I had a wonderful check-in experience at this hotel. The staff was friendly and efficient, making the process seamless. They greeted me with a smile and ensured that I had everything I needed. My stay started on a positive note, and I am already looking forward to the rest of my stay here. Highly recommended!
      </p>
    </div>
  </div>
      <div className="container mt-5">
      <h2 className='fs-3 fw-bold'>Hotel policies</h2>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="check-in-out">
            <div className="d-flex align-items-center">
              <div className="policy">
                <h5>Check-in</h5>
                <p>12:00 PM</p>
              </div>
              <div className="policy ml-5">
                <h5>Check-out</h5>
                <p>11:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="mt-4">
        <li>Couples are welcome</li>
        <li>Guests can check in using any local or outstation ID proof (PAN card not accepted).</li>
        <li>This hotel is serviced under the trade name of La Prince Residency as per quality standards of OTO STAYS</li>
      </ul>
    </div>
      </div>
  )
}

export default Ratting