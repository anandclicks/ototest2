import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../ContextApi/Usercontext';
import Listproperty from './Listproperty';
import { Link } from 'react-router-dom';

function Home() {
  const [searchTerm, setSearchTerm] = useState(''); // State to store the search term
  const [filteredData, setFilteredData] = useState([]); // State to store filtered PG data

  const { pgAllData } = useContext(UserContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to handle search input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter pgAllData based on search term
    const filtered = pgAllData.filter((pg) =>
      pg.pgTitle.toLowerCase().includes(value.toLowerCase()) || 
      pg.pgLocation.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <div className='container-fluid home position-relative overflow-hidden'>
        <div className="custom-shape-divider-bottom-1722579871">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>
        <video className='h-full w-full object-cover' loop muted autoPlay src="\home video\video1.mp4"></video>
        <div className="row row2 h-full flex-col-reverse flex-lg-col hometextcontent">
          <div className="col-12 homeRight flex justify-center items-center my-3 my-lg-0">
            <div className="box text-white flex flex-col items-center justify-center w-full">
              <h1 className='my-3'>Your Stay. Your Way.</h1>
              <p className='p'>Make your own food or take a subscription</p>
              <div className='searchBox flex justify-center w-full overflow-hidden p-0 mt-3'>
                <input 
                  placeholder='Find the best location for place or work' 
                  type="text"  
                  className='border w-50 p-2 py-3 h-full homeInput text-black'
                  value={searchTerm}
                  onChange={handleInputChange} // Update the state when typing
                />
                <div className="btn primeryBg  border-none rounded-none h-full m-0 homeBtn">
                  NEAR ME <i className="fa-solid fa-magnifying-glass ms-2"></i>
                </div>
              </div>
              {searchTerm && (
                <div className="searchResults">
                  <ul>
                    {filteredData.map((item, index) => (
                     <Link to={item.pageUrl}>
                      <li key={index}>
                        <div className="imageOfPg">
                          <img src={`${item.imageUrl}1.jpg`} alt="" />
                        </div>
                        <div className="pgDetails">
                          <div className="nameOfPg">{item.pgTitle}</div>
                          <div className="locationOfPg">{item.city}</div>
                        </div>
                      </li>
                     </Link>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
