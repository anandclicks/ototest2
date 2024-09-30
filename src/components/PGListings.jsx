// src/components/PGListings.js

import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../ContextApi/Usercontext';

function PGListings() {
  const { pgAllData } = useContext(UserContext);
  const [randomPGs, setRandomPGs] = useState([]);

  // Utility function to shuffle an array using Fisher-Yates algorithm
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    if (pgAllData && pgAllData.length > 0) {
      const shuffledPGs = shuffleArray(pgAllData);
      const selectedPGs = shuffledPGs.slice(0, 4); // Select first four after shuffling
      setRandomPGs(selectedPGs);
    }
  }, [pgAllData]);

  // Handle cases where pgAllData might not be available yet
  if (!pgAllData) {
    return <p>Loading PG Listings...</p>;
  }
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="container mt-4 pgListing pt-5">
      <h2 className="fs-2 py-4">
        Explore Other <span className="primeryColor">PG</span>
      </h2>
      <div className="row ">
        {randomPGs.map((pg) => (
          <Link to={pg.pageUrl} className="col-md-3 mb-4 cursor-pointer Pgcard" key={pg.pageUrl}>
            <div className="cardimg">
              <div className="cardImg">
                <img
                  src={`${pg.imageUrl}1.jpg`}
                  className="card-img-top h-full w-full object-cover"
                  alt={pg.pgTitle || 'PG Image'}
                />
              </div>
              <div className="card-body rounded-xl overflow-hidden shadow-xl p-3">
                <div className="border-b py-2">
                  <h5 className="card-title fwnormal fs-5">{pg.pgTitle || 'PG Title'}</h5>
                  <p className="card-text">{pg.description || 'Lorem ipsum dolor sit amet.'}</p>
                </div>
                <div className="flex justify-between p-2">
                  <div>
                    {pg.doubleSharingPrice && (
                      <p className="card-text fw-light">
                        <strong>Starts at ₹{pg.doubleSharingPrice}</strong>
                      </p>
                    )}
                    {/* Constant Discount */}
                    <p className="card-text text-info">UPTO 12% OFF</p>
                  </div>
                  <div className="btn primeryBg border-none flex items-center w-28">Book now</div>
                </div>
              </div>
            </div>
          </Link>
        ))}

        {/* Handle case when there are no PGs to display */}
        {randomPGs.length === 0 && (
          <p>No PG listings available at the moment. Please check back later!</p>
        )}
      </div>
    </div>
  );
}

export default PGListings;
