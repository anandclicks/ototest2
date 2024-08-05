import React, { useEffect } from 'react'
import Otoquility from './Otoquility'
import CompanyInfo from './CompanyInfo '

function Aboutus() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
     <Otoquility/>
     <CompanyInfo/>
    </div>
  )
}

export default Aboutus