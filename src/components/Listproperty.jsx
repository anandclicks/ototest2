import { UserContext } from '../ContextApi/Usercontext';
import React, { useContext, useState } from 'react';
import axios from 'axios';

function Listproperty() {
  const { Formstate, setFormstate } = useContext(UserContext);

  // State to capture form data
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    roomType: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://backend-for-oto.onrender.com/getAcall', formData);
      if (response.status === 200) {
        alert('Property adding request sent successfully!');
        setFormstate(false);  // Close the form on successful submission
        setFormData({ name: '', mobileNumber: '', email: '', roomType: '' });  // Reset form
      }
    } catch (error) {
      // console.error('Error submitting form:', error);
      alert('Failed to add property. Please try again.');
    }
  };

  return (
    <div className='postion-reletive '>
      <div className={`col-12 h-[100vh] position-fixed addPropertyForm z-50 shadow-lg d-flex justify-content-center align-items-center ${Formstate ? "d-flex" : "d-none"}`}>
        <form className="col-lg-4 col-12 bg-white rounded-xl p-4 shadow-xl" onSubmit={handleSubmit}>
          <i onClick={() => setFormstate(prev => !prev)} className="fa-regular fa-xmark position-absolute end-0 top-0 m-3 m-lg-5 cursur p24px cursor-pointer fw-bold closeAddPropertyForm text-black"></i>
          <h2 className="text-center p24px fwnormal">Add property</h2>

          {/* Name input */}
          <div className="form-group">
            <input
              type="text"
              className="form-control py-3"
              placeholder="Name*"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone Number input */}
          <div className="form-group">
            <input
              type="number"
              className="form-control py-3"
              placeholder="Phone Number*"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </div>

          {/* Property Location input */}
          <div className="form-group">
            <input
              className="form-control py-3"
              placeholder="Property Location"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Sharing Type input */}
          <div className="form-group">
            <select
              className="form-control py-3"
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              required
            >
              <option disabled value="">Select Sharing Type</option>
              <option value="single">Single Sharing</option>
              <option value="double">Double Sharing</option>
              <option value="triple">Triple Sharing</option>
            </select>
          </div>

          {/* Submit button */}
          <button type="submit" className="btn primeryBg btn-block py-2 px-5 w-100">Submit</button>

          <p className="mt-3 text-center">Need Assistance? Call at <a className="text-decoration-none text-dark" href="tel:+91 9599050903">+91 7415051778</a></p>
        </form>
      </div>
    </div>
  );
}

export default Listproperty;
