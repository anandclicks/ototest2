import axios from 'axios';
import React, { useState } from 'react';
function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    roomType: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // API call here
    try {
        const response = await axios.post('https://backend-for-oto.onrender.com/getAcall', formData);
        // console.log('API Response:', response.data);
        if (response.status === 200) {
          alert('We will contact you soon!');
          setFormstate(false);  // Close the form on successful submission
          setFormData({ name: '', mobileNumber: '', email: '', roomType: '' });  // Reset form
        }
        // Handle success (e.g., close the form, show a success message, etc.)
      }catch (error) {
      console.error('Error:', error);
      alert('Something went wrong.');
    }
  };

  return (
    <div>
      <div className="container-flued text-white py-3 py-lg-5 contactform overflow-hidden">
        <div className="container mt-0 mt-lg-5 position-relative">
          <div className="row">
            <div className="col-md-6">
              <h1 className='my-3 fs-2 mb-0'>Need Help?</h1>
              <div className="line-with-dots ms-5"><div className="line"></div></div>
              <h2 className='fs-3 fwnormal'>Contact Us Now</h2>
              <p className='my-3'>If you have any questions, please don't hesitate to send us a message. We will reply as soon as possible.</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input 
                    type="text" 
                    className="form-control contactInput" 
                    placeholder="Your Name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                  />
                </div>
                <div className='flex w-full gap-3'>
                  <div className="mb-3 w-50">
                    <input 
                      type="email" 
                      className="form-control contactInput" 
                      placeholder="Email Address" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                    />
                  </div>
                  <div className="mb-3 w-50">
                    <input 
                      type="number" 
                      className="form-control contactInput" 
                      placeholder="Phone Number" 
                      name="mobileNumber" 
                      value={formData.mobileNumber} 
                      onChange={handleChange} 
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <select 
                    className="form-control contactInput" 
                    name="roomType" 
                    value={formData.roomType} 
                    onChange={handleChange}
                  >
                    <option value="">Select Room Type</option>
                    <option value="single">Single Sharing</option>
                    <option value="double">Double Sharing</option>
                    <option value="triple">Triple Sharing</option>
                  </select>
                </div>
                <button type="submit" className="btn primeryBg border-none rounded-none px-3 py-3">Submit Now</button>
              </form>
            </div>
            <div className="col-md-6 flex flex-col justify-center items-end">
              <div className="box mb-2 mb-lg-5 mt-2 mt-lg-0">
                <div className='mb-2 mb-lg-5 mt-5 mt-lg-0'>
                  <h1 className='fs-3 mb-2 mb-lg-4'>Contact information</h1>
                  <p>Feel free to contact us for more information or inquiries; we’re always happy to help!</p>
                </div>
                <div className='flex gap-2 flex-wrap m-4 ms-0'>
                  <i className="fa-solid fa-map bg-white text-black p-3 rounded-circle me-0 me-lg-3"></i>Nearby Radha public <br /> school 
                  Nearby - Esi hospital Sector 22 Noida
                </div>
                <div className='flex flex-col gap-4'>
                  <div>
                    <i className="fa-solid fa-envelope bg-white text-black p-3 rounded-circle me-3"></i> kayanthusainotostays@gmail.com
                  </div>
                  <div>
                    <i className="fa-solid fa-phone bg-white text-black p-3 rounded-circle me-3"></i>+91 7415051778
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
