import React, { useEffect } from 'react'
import Otoquility from './Otoquility'
import CompanyInfo from './CompanyInfo '
import Whychooseustwo from '../Whychooseustwo';
import Contactus from '../Contactus';

function Aboutus() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div >
     <Otoquility/>
     <CompanyInfo/>
     <Whychooseustwo/>
     <Contactus/>
    </div>
  )
}

export default Aboutus