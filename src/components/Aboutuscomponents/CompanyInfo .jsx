import React from 'react'

function CompanyInfo () {
  return (
    <div>
      <section className="company-info-section primeryBg text-white">
    <div className="container py-5">
      <div className="row align-items-center ">
        <div className="col-md-6 mb-4 mb-md-0 ">
          <h5 className='p'>About Our Company</h5>
          <h2 className=" p24px">Make Your Dream Living a Reality & Grow with Oto Stays</h2>
          <p className="my-3 p">
          Founded with a vision to create vibrant, flexible living spaces, Otostays has quickly become a leader in the co-living and accommodation sector. We are committed to delivering high-quality, well-designed spaces that enhance the lifestyles of our residents. Whether you're a young professional, a digital nomad, or simply seeking a change, our properties offer a unique blend of comfort, convenience, and community.
          </p>
        </div>
        <div className="col-md-6 text-center aboutus2ndsec">
          <img src="/Aboutusimgs\full-sleep-isometric-composition.png" alt="Growth Illustration" className="img-fluid" />
        </div>
      </div>
    </div>
  </section> 
  <section className="vision-mission-section">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 d-flex  align-items-start gap-2 ">
            <img src="https://t3.ftcdn.net/jpg/04/92/15/56/360_F_492155625_9aDYSkVvb4T4EN2Y1ExiN2amfvrTqoEX.jpg" alt="Our Vision" className="img-fluid mb-4 w-40 rounded-lg" />
           <div>
           <h2 className='p24px fw-bold'>Our Vision</h2>
            <p className="p">
            Our mission at Otostays is to create exceptional living experiences by offering thoughtfully designed co-living and accommodation solutions that prioritize community.
            </p>
           </div>
          </div>
          <div className="col-md-6 d-flex  align-items-start gap-2 ">
            <img  src="https://t3.ftcdn.net/jpg/05/98/83/96/360_F_598839640_peyXFgBtwSqLJRmrbizJmVn7g8dzJXkA.jpg" alt="Our Mission" className="img-fluid mb-4 w-40 rounded-lg" />
            <div>
            <h2 className='p24px fw-bold'>Our Mission</h2>
            <p className="p">
            Our vision is to be the leading innovator in the co-living and accommodation sector, known for our commitment to community, excellence, and sustainability. 
            </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  </div>
  )
}

export default CompanyInfo 