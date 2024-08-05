import React from 'react'

function CompanyInfo () {
  return (
    <div>
      <section className="company-info-section primeryBg text-white">
    <div className="container py-5">
      <div className="row align-items-center ">
        <div className="col-md-6 mb-4 mb-md-0 ">
          <h5 className='p'>About Our Company</h5>
          <h2 className="display-4 fw-bold fs-1">Make Your Dream Living a Reality & Grow with Oto Stays</h2>
          <p className="my-3 p">
          Founded with a vision to create vibrant, flexible living spaces, Otostays has quickly become a leader in the co-living and accommodation sector. We are committed to delivering high-quality, well-designed spaces that enhance the lifestyles of our residents. Whether you're a young professional, a digital nomad, or simply seeking a change, our properties offer a unique blend of comfort, convenience, and community.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img src="https://media.istockphoto.com/id/1455958730/vector/data-monitoring-and-analysis-on-desktop-tiny-people-with-magnifying-glass-research-graph.jpg?s=612x612&w=0&k=20&c=aL-XEnEBILCzi-qX_7tUn84FH7Ei_YoJTxlcGCY0Vb8=" alt="Growth Illustration" className="img-fluid" />
        </div>
      </div>
    </div>
  </section> 
  <section className="vision-mission-section">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 d-flex  align-items-start gap-2 flex-col">
            <img src="https://t3.ftcdn.net/jpg/04/92/15/56/360_F_492155625_9aDYSkVvb4T4EN2Y1ExiN2amfvrTqoEX.jpg" alt="Our Vision" className="img-fluid mb-4 w-40 rounded-lg" />
           <div>
           <h2 className='fs-3 fw-bold'>Our Vision</h2>
            <p className="p">
            Our mission at Otostays is to create exceptional living experiences by offering thoughtfully designed co-living and accommodation solutions that prioritize community, flexibility, and quality. We strive to enrich the lives of our residents by providing spaces that support their personal and professional growth, fostering connections, and promoting a balanced lifestyle. We are dedicated to setting new standards in the industry and continuously improving our services to meet and exceed the expectations of those we serve.
            </p>
           </div>
          </div>
          <div className="col-md-6 d-flex  align-items-start gap-2 flex-col">
            <img  src="https://t3.ftcdn.net/jpg/05/98/83/96/360_F_598839640_peyXFgBtwSqLJRmrbizJmVn7g8dzJXkA.jpg" alt="Our Mission" className="img-fluid mb-4 w-40 rounded-lg" />
            <div>
            <h2 className='fs-3 fw-bold'>Our Mission</h2>
            <p className="p">
            Our vision is to be the leading innovator in the co-living and accommodation sector, known for our commitment to community, excellence, and sustainability. We aspire to transform the way people experience living by creating spaces that are not only functional but also inspiring. By embracing the latest trends in design and technology, we aim to offer a seamless blend of comfort, convenience, and connectivity. We envision a future where Otostays is synonymous with exceptional living experiences, and our communities are celebrated for their vibrancy, inclusivity, and positive impact on the world.
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