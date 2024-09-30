import React from 'react'

function Bookingsummery() {
  return (
    <div className="container mt-5">
    <div className="card p-4 col-lg-9 col-12">
      {/* <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>₹1085 <span className="text-muted text-decoration-line-through">₹3827</span> <span className="badge badge-success">71% off</span></h4>
      </div> */}
      {/* <div className="text-muted mb-3">+ taxes & fees: ₹170</div> */}
      <div className="mb-3">
        <strong>Wed, 31 Jul – Thu, 1 Aug</strong><br />
        <span contentEditable>1</span> Room, <span contentEditable>1</span> Guest
      </div>
      {/* <div className="mb-3">
        <div className="d-flex justify-content-between">
          <div>Classic</div>
          <button className="btn btn-outline-secondary btn-sm">Change</button>
        </div>
      </div> */}
      <div className="mb-3">
        <div className="d-flex justify-content-between align-items-center">
          <div><span className="badge bg-black">Welcome discount applied</span></div>
          <div className="text-success">-₹1807</div>
        </div>
      </div>
      <div className="mb-3">
        <div className="d-flex justify-content-between">
          <div>Your savings</div>
          <div>₹0000</div>
        </div>
      </div>
      <div className="mb-3">
        <div className="d-flex justify-content-between">
          <div>Total price</div>
          <div>₹0000</div>
        </div>
        <small className="text-muted">Including taxes & fees</small>
      </div>
      <button className="btn btn-success btn-block">Continue to Book</button>
    
    </div>
  </div>
  )
}

export default Bookingsummery