import { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import { UserContextProvider } from '../ContextApi/Usercontext';
import Home from './components/Home';
import Prasence from './components/Prasence';
import Section3rd from './components/Section3rd';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Navbar2 from './components/Navbar2';
import WhychooseUs from './components/WhychooseUs';
import Delhi from './components/citylist/Delhi';
import Noida from './components/citylist/Noida';
import GreaterNoida from './components/citylist/GreaterNoida';
import Gurugram from './components/citylist/Gurugram';
import Gaziyabad from './components/citylist/Gaziyabad';
import Allpg from './components/Allpgs/Allpg';
import Testimonials from './components/Testimonials';
import Whychooseustwo from './components/Whychooseustwo';
import Otocapitalsec44 from './components/towpg/Otocapitalsec44';
import Otobloomsec45 from './components/towpg/Otobloomsec45';
import Otoroyaltownsec45 from './components/towpg/Otoroyaltownsec45';
import Otoroyalwinsec104 from './components/towpg/Otoroyalwinsec104';
import Otoscouthousesec45 from './components/towpg/Otoscouthousesec45';
import Otowhitehousesec104 from './components/towpg/Otowhitehousesec104';
import Aboutus from './components/Aboutuscomponents/Aboutus';
import Otoquility from './components/Aboutuscomponents/Otoquility';
import Prasencetwo from './components/Prasencetwo';
import Listproperty from './components/Listproperty';
import PGListings from './components/PGListings';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <UserContextProvider>
          <Navbar />
          <Routes>
            {/* this is index route */}
            <Route index element={<><Home /><Prasence /><Otoquility/><Section3rd /><Testimonials /><Whychooseustwo /></>} />
            <Route path='/aboutus' element={<><Navbar2 /><Aboutus/></>} />
            {/* this route is for explore pg */}
            <Route path='/explorepgs' element={<><Allpg /></>} />
            {/* these are all routes for individual cities */}
            <Route path='/pg-in-delhi' element={<><Delhi /></>} />
            <Route path='/pg-in-noida' element={<><Noida /></>} />
            <Route path='/pg-in-grater-noida' element={<><GreaterNoida /></>} />
            <Route path='/pg-in-gurugram' element={<><Gurugram /></>} />
            <Route path='/pg-in-gaziyabad' element={<><Gaziyabad /></>} />
            {/* these routes for individual pg in individual pg */}
            <Route path='/pg-in-noida/Oto-capital-sec44' element={<><Otocapitalsec44 /></>} />
            <Route path='/pg-in-noida/Oto-bloom-sec45' element={<><Otobloomsec45 /></>} />
            <Route path='/pg-in-noida/Oto-royaltown-sec45' element={<><Otoroyaltownsec45 /></>} />
            <Route path='/pg-in-noida/Oto-royalwin-sec104' element={<><Otoroyalwinsec104 /></>} />
            <Route path='/pg-in-noida/Oto-scout-house-sec45' element={<><Otoscouthousesec45 /></>} />
            <Route path='/pg-in-noida/Oto-white-houses-sec104' element={<><Otowhitehousesec104 /></>} />
          </Routes>
          <Footer />
        </UserContextProvider>
      </div>
    </>
  );
}

export default App;
