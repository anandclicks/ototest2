
import { UserContext } from '../../ContextApi/Usercontext'
import React, { useContext } from 'react'

function Listproperty() {
  const {Formstate, setFormstate} = useContext(UserContext)
  return (
    <div className='postion-reletive '>
      <div class={`col-12  h-[100vh] position-fixed addPropertyForm z-50 shadow-lg d-flex justify-content-center align-items-center ${Formstate ? "d-flex" : "d-none"}`}>
    <form class="col-lg-4 col-12 bg-white rounded-xl p-4 shadow-xl">
    <i onClick={prev => setFormstate(!prev)} class="fa-regular fa-xmark position-absolute end-0 top-0 m-3 m-lg-5 cursur fs-1 cursor-pointer fw-bold closeAddPropertyForm text-black"></i>
      <h2 class="text-center fs-3 fwnormal">Add property</h2>
      <div class="form-group">
        <input type="text" class="form-control py-3" placeholder="Name*" required />
      </div>
      <div class="form-group">
        <input type="text" class="form-control py-3" placeholder="Mobile number*" required />
      </div>
      <div class="form-group">
        <input class="form-control py-3" placeholder="Property location" type="text" name="" id=""/>
      </div>
      <div class="form-group">
        <input class="form-control py-3" type="number" placeholder="Number of bed*" name="" id=""/>
      </div>
      <div class="form-group">
        <input class="form-control py-3" type="file" placeholder="Attach property images*" name="" id=""/>
      </div>
      <button type="submit" class="btn primeryBg btn-block py-2 px-5 w-100">Submit</button>
    <p class="mt-3 text-center">Need Assistance? Call at <a class="text-decoration-none text-dark" href="tel:+91 9599050903">+91 7415051778</a></p>
    </form>
      </div>
      </div>
  )
}

export default Listproperty