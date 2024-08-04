import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar'
import { UserContextProvider } from '../ContextApi/Usercontext'
import Home from './components/Home'
import Prasence from './components/Prasence'
import Section3rd from './components/Section3rd'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Navbar2 from './components/Navbar2'
import WhychooseUs from './components/WhychooseUs'
import Delhi from './components/citylist/Delhi'
import Noida from './components/citylist/Noida'
import GreaterNoida from './components/citylist/GreaterNoida'
import Gurugram from './components/citylist/Gurugram'
import Gaziyabad from './components/citylist/Gaziyabad'
import Allpg from './components/Allpgs/Allpg'
import Testimonials from './components/Testimonials'
import Whychooseustwo from './components/Whychooseustwo'
import Otocapitalsec44 from '../public/Allcitiesindividualpgs/towpg/Otocapitalsec44'
import Otobloomsec45 from '../public/Allcitiesindividualpgs/towpg/Otobloomsec45'
import Otoroyaltownsec45 from '../public/Allcitiesindividualpgs/towpg/Otoroyaltownsec45'
import Otoroyalwinsec104 from '../public/Allcitiesindividualpgs/towpg/Otoroyalwinsec104'
import Otoscouthousesec45 from '../public/Allcitiesindividualpgs/towpg/Otoscouthousesec45'
import Otowhitehousesec104 from '../public/Allcitiesindividualpgs/towpg/Otowhitehousesec104'

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
     <div className=''> 
      <UserContextProvider>
      <Navbar/>
      <Routes>
        {/* this is index route  */}
        <Route index element={<><Home/><Prasence/><Section3rd/><Testimonials/><Whychooseustwo/> </>}/>
        <Route exect path='/aboutus' element={<><Navbar2/><Section3rd/><WhychooseUs/></>}/>
        {/* this route is for explore pg  */}
        <Route exect path='/explorepgs' element={<><Allpg/></>}/>
        {/* these are all routes for individual cities  */}
        <Route exect path='/pg-in-delhi' element={<><Delhi/></>}/>
        <Route exect path='/pg-in-noida' element={<><Noida/></>}/>
        <Route exect path='/pg-in-grater-noida' element={<><GreaterNoida/></>}/>
        <Route exect path='/pg-in-gurugram' element={<><Gurugram/></>}/>
        <Route exect path='/pg-in-gaziyabad' element={<><Gaziyabad/></>}/>
        {/* these routes fro indivatual pg in individual pg  */}
       <Route exect path='/pg-in-noida/Oto-capital-sec44' element={<><Otocapitalsec44/></>}/>
       <Route exect path='/pg-in-noida/Oto-bloom-sec45' element={<><Otobloomsec45/></>}/>
       <Route exect path='/pg-in-noida/Oto-royaltown-sec45' element={<><Otoroyaltownsec45/></>}/>
       <Route exect path='/pg-in-noida/Oto-royalwin-sec104' element={<><Otoroyalwinsec104/></>}/>
       <Route exect path='/pg-in-noida/Oto-scout-house-sec45' element={<><Otoscouthousesec45/></>}/>
       <Route exect path='/pg-in-noida/Oto-white-houses-sec104' element={<><Otowhitehousesec104/></>}/>
      </Routes>
      <Footer/> 
      </UserContextProvider>
     </div>
    </>
  )
}

export default App