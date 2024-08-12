import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const amenities = [
  { icon: 'fas fa-wifi', text: 'Wi-Fi' },
  { icon: 'fas fa-bed', text: 'Fully furnished room' },
  { icon: 'fas fa-snowflake', text: 'Refrigerator' },
 
  { icon: 'fas fa-bed', text: 'Bed sheet' },
  
  { icon: 'fas fa-chair', text: 'Chair' },
  { icon: 'fas fa-water', text: 'Water dispenser' },
 
  { icon: 'fas fa-broom', text: 'Alternate House keeping' },
  { icon: 'fas fa-motorcycle', text: 'Two wheeler parking' },
  { icon: 'fas fa-video', text: 'CCTV camera' },
  { icon: 'fas fa-bath', text: 'Attached Bathroom' },
  { icon: 'fas fa-shield-alt', text: 'Security' },
  { icon: 'fas fa-bolt', text: '24*7 power backup' },
  { icon: 'fas fa-user-shield', text: '24*7 property managers will be available' },
  { icon: 'fas fa-tools', text: 'All type repairing work on payroll engineer' },
  { icon: 'fas fa-home', text: 'Unisex PG sector 44 Noida' },
];

const Amenities = () => {
  return (
    <div className="amenities container pt-3">
      <h2 className=' mb-2 fs-3 my-4 pb-3'>Amazing <span className='primeryColor'>Amenties</span></h2>
      <div className="row">
        {amenities.map((amenity, index) => (
          <div style={{fontSize : `13px`}} className="col-12 col-lg-4 d-flex align-items-center amenity fw500" key={index}>
            <i className={`${amenity.icon} amenity-icon`}></i>
            <span>{amenity.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
