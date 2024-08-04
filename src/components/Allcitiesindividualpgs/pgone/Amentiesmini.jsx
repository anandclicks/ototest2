import React from 'react'
function Amentiesmini() {
  const  amenities = [{ icon: 'fas fa-wifi', text: 'Wi-Fi' },
  { icon: 'fas fa-bed', text: 'Fully furnished room' },
  { icon: 'fas fa-snowflake', text: 'Refrigerator' },
  { icon: 'fas fa-bath', text: 'Attached Bathroom' },
  { icon: 'fas fa-shield-alt', text: 'Security' },
  { icon: 'fas fa-bolt', text: '24*7 power backup' },]
  return (
    <div className="amenities container ">
      <h2 className='fs-4 mb-1 '>Amenities</h2>
      <div className="row">
        {amenities.map((amenity, index) => (
          <div className="col-12 col-lg-4 d-flex align-items-center amenity m-0" key={index}>
            <i className={`${amenity.icon} amenity-icon`}></i>
            <span>{amenity.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Amentiesmini