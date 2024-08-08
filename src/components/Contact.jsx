import React from 'react'


function Contact() {
  return (
    <>
    <div className='h60two contact py-5'>
      <div className="row row2">
        <div className="col-12 col-lg-6 formLeft d-flex items-center my-3 my-lg-0">
          <div className="box">
            <h1>Get in <span className='hiligtedText'>Touch</span></h1>
            <p className='p'>Our best home are selling fast! <br /> Ger personally connected with us.</p>
          </div>
        </div>
        <div className="col-12 col-lg-6 formRight flex justify-end my-3 my-lg-0">
        <div className="contianer h-100 w-full ">
<div className="container d-flex h-100 justify-content-center align-items-center">
   
      <div className="form-container primeryShadow p-4 col-12 col-lg-7 rounded-4 bg-white">  
        <h2 className="text-center mb-4">Get persolally connect with us.</h2>
        <form action="" method="post">
          <div className="form-group">
            
            <input type="text" className="form-control mb-3 bg-transparent text-white py-3" name="" placeholder="Full name" value={''}/>
          </div>
          <div className="form-group">
             
              <input type="text" className="form-control mb-3 bg-transparent text-white py-3" name="" placeholder="Email id" value={''}/>
            </div>    
          <div className="form-group">
            
            <input type="email" className="form-control mb-3 bg-transparent text-white py-3" name="" aria-describedby="emailHelp" placeholder="Mobile number" value={''}/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control mb-3 bg-transparent text-white py-3" name="" placeholder="Select city" value={''}/>
          </div>
          <button type="submit" className="btn primeryBg btn-block w-100 py-3 mt-3 mb-3">Submit</button>
        </form>
      </div>

            </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact