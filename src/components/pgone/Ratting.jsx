import React, { useEffect } from 'react';

function Ratting({ allNearby }) {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts or updates
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="rating-breakdown mt-5">
    <div className="d-flex align-items-center">
      <span>5 ★</span>
      <div className="progress w-75 mx-2">
        <div
          className="progress-bar bookPg"
          role="progressbar"
          style={{ width: '66%' }}
          aria-valuenow="66"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <span>66%</span>
    </div>
    <div className="d-flex align-items-center">
      <span>4 ★</span>
      <div className="progress w-75 mx-2">
        <div
          className="progress-bar bookPg"
          role="progressbar"
          style={{ width: '16%' }}
          aria-valuenow="16"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <span>16%</span>
    </div>
    <div className="d-flex align-items-center">
      <span>3 ★</span>
      <div className="progress w-75 mx-2">
        <div
          className="progress-bar bookPg"
          role="progressbar"
          style={{ width: '16%' }}
          aria-valuenow="16"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <span>16%</span>
    </div>
    <div className="d-flex align-items-center">
      <span>2 ★</span>
      <div className="progress w-75 mx-2">
        <div
          className="progress-bar bookPg"
          role="progressbar"
          style={{ width: '0%' }}
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <span>0%</span>
    </div>

{/* Reviews Section */}
{/* <div className="container mt-4">
<div className="review p-3 mb-3 border rounded"> */}
  {/* Review details here */}
{/* </div> */}

{/* Other Reviews */}
{/* </div> */}

{/* Nearby Attractions Section */}
<div className="nearby-card custom-card-shadow my-4">
<div className="nearby-card-body p-0 p-lg-4">
  <h5 className="nearby-card-title mb-3 p24px fw-bold">Nearby Attractions</h5>
  <ul className="nearby-card-list list-unstyled">
    <li className="nearby-card-item">
      <span role="img" aria-label="location">📍</span> {allNearby.nearByLandmarkOne}
    </li>
    <li className="nearby-card-item">
      <span role="img" aria-label="metro">🚇</span> {allNearby.distanceFromPgOne} from Botanical Garden metro station
    </li>
    <li className="nearby-card-item">
      <span role="img" aria-label="food">🍱</span> {allNearby.distanceFromPgTwo} from DLF Mall of India
    </li>
    <li className="nearby-card-item">
      <span role="img" aria-label="park">🌳🌲</span> Nearby best location parks and workout space
    </li>
  </ul>
</div>
</div>
</div>
  );
}

export default Ratting;
