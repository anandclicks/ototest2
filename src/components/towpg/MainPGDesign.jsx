import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Navbar2 from '../Navbar2';
import Bookingsummery from '../pgone/Bookingsummery';
import Amenities from '../pgone/Amenities';
import DelhiAllpg from '../pgbycities/DelhiAllpg';
import NoidaALLPg from '../pgbycities/NoidaALLPg';
import { Link } from 'react-router-dom';
import GreaterNoida from '../citylist/GreaterNoida';
import GaziyabadALlpg from '../pgbycities/GaziyabadAllPg';
import Ratting from '../pgone/Ratting';
import PGListings from '../PGListings';

function MainPGDesign({
  pgTitle,
  pgLocation,
  mapUrl,
  imageUrl,
  singleSharingPrice,
  doubleSharingPrice,
  tripleSharingPrice,
  liveLocationUrl,
  nearByLandmarkOne,
  nearByLandmarkTwo,
  nearByLandmarkThree,
  distanceFromPgOne,
  distanceFromPgTwo,
  distanceFromPgThree
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    roomType: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://backend-for-oto.onrender.com/getAcall', formData);
      if (response.status === 200) {
        alert('We will contact you soon!');
        setFormData({ name: '', email: '', mobileNumber: '', roomType: '' }); // Reset form
      }
    } catch (error) {
      // console.error('Error submitting the form', error);
      alert('Failed to submit the form. Please try again.');
    }
  };

  return (
    <>
      <Navbar2 />
      <div className='container-flued pgMain p-0'>
        <div className="row p-0">
          <div className="col-12 row flex-nowrap p-0 justify-center ps-4 overflow-scroll imgsofone">
            <div className="col-12 col-lg-3 overflow-hidden p-0 h-full">
              <img className='h-full w-full object-cover' src={`${imageUrl}1.jpg`} alt="" />
            </div>
            <div className="col-12 col-lg-3 overflow-hidden p-0 h-full">
              <img className='h-full w-full object-cover' src={`${imageUrl}2.jpg`} alt="" />
            </div>
            <div className="col-12 col-lg-3 overflow-hidden p-0 h-full">
              <img className='h-full w-full object-cover' src={`${imageUrl}3.jpg`} alt="" />
            </div>
            <div className="col-12 col-lg-3 overflow-hidden p-0 h-full">
              <img className='h-full w-full object-cover' src={`${imageUrl}4.jpg`} alt="" />
            </div>
          </div>
          <div className="col-12 row row2 py-3 mb-5 mb-lg-0">
            <div className="col-12 col-lg-8 ps-4 ps-lg-0">
              <h2 className='fwnormal pgTitle mt-3'>{pgTitle}</h2>
              <p className='p text-black-50'>{pgLocation}</p>

              {/* prices room rent */}
              <div className='Prices'>
                <ul>
                  <li>
                    <div className="rent">₹ {singleSharingPrice}</div>
                    <div className="sharing">Single Sharing</div>
                  </li>
                  <li>
                    <div className="rent">₹ {doubleSharingPrice}</div>
                    <div className="sharing">Double Sharing</div>
                  </li>
                  <li>
                    <div className="rent">₹ {tripleSharingPrice}</div>
                    <div className="sharing">Triple Sharing</div>
                  </li>
                </ul>
              </div>
              <Amenities />
              <Ratting allNearby={{ nearByLandmarkOne, nearByLandmarkTwo, nearByLandmarkThree, distanceFromPgOne, distanceFromPgTwo, distanceFromPgThree }} />
            </div>

            <div className="col-12 col-lg-4 flex flex-col items-end pt-5">
              <form className='col-lg-10 shadow-md rounded-none h-auto col-12 onejsxform' onSubmit={handleSubmit}>
                <h2 className='p24px my-3 pgInsideFormTitle'>Get personally connected with us.</h2>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control mb-3 bg-transparent text-white py-3"
                    name="name"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control mb-3 bg-transparent text-white py-3"
                    name="email"
                    placeholder="Email id"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control mb-3 bg-transparent text-white py-3"
                    name="mobileNumber"
                    placeholder="Mobile number"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <select
                    className="form-control mb-3 bg-transparent text-black py-3"
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    required
                  >
                    <option disabled value="">Select Room Type</option>
                    <option value="single">Single Sharing</option>
                    <option value="double">Double Sharing</option>
                    <option value="triple">Triple Sharing</option>
                  </select>
                </div>
                <button type="submit" className="btn primeryBg btn-block w-100 py-3 mt-3 mb-3">Submit</button>
              </form>

              <div className="col-lg-10 col-12 mt-3 h-50 border-primery">
                <iframe className='h-full w-full' src={`${liveLocationUrl}`} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PGListings />
    </>
  );
}

export default MainPGDesign;
