import React, { useContext, useState } from 'react';
import { UserContext } from '../ContextApi/Usercontext';


const PGFilter = () => {
  const [rangeValue, setRangeValue] = useState(4999);
  const [selectedSort, setSelectedSort] = useState(null);
  const [selectedSharing, setSelectedSharing] = useState(null);
  const {pgAllData,setpgAllData} = useContext(UserContext)

  const { 
    lowToHighDataHandle, 
    highToLowDataHandle, 
    SingleSharingHandle, 
    doubleSharingHandle, 
    tripleSharingHandle, 
    handleRange 
  } = useContext(UserContext);

  const handleRangeInput = (event) => {
    const value = event.target.value;
    setRangeValue(value);
    handleRange(value);
  };

  const handleCheckboxChange = (value, handler) => {
    if (selectedSort === value) {
      setSelectedSort(null);
    } else {
      setSelectedSort(value);
      handler(); // Call the respective sorting function
    }
  };

  const handleSharingChange = (value) => {
    setSelectedSharing(prev => (prev === value ? null : value));
  };

  return (
    <div className={`filterSide container`}>
        <div className="filterNavbar">
          <h2 className='filterNavTitle fs-3 '>Filters</h2>
        </div>
      <div className="filterWrapper flex w-full gap-5 mt-3">
        {/* Sort By Filter */}
        <div className="sortBy filterBox">
          <h3 className='filterTypeTitle mb-3 filterType'>Sort By</h3>
          <div className="filterinputBoxe ">
            <div className="inputWrapper flex items-center gap-2">
              <input 
                onChange={() => handleCheckboxChange('lowToHigh')} 
                onClick={lowToHighDataHandle}
                checked={selectedSort === 'lowToHigh'} 
                type="checkbox" 
              />
              <p>Price : Low to High</p>
            </div>
            <div className="inputWrapper flex items-center gap-2">
              <input 
                onChange={() => handleCheckboxChange('highToLow')} 
                onClick={highToLowDataHandle}
                checked={selectedSort === 'highToLow'} 
                type="checkbox" 
              />
              <p>Price : High to Low</p>
            </div>
          </div>
        </div>
        {/* Sharing Type Filter */}
        <div className="sharingType filterBox ">
          <h3 className='filterTypeTitle mb-3 filterType'>Filter By</h3>
          <div className="filterinputBoxe">
            <div className="inputWrapper flex gap-2">
              <input 
                type="checkbox" 
                onClick={SingleSharingHandle}
                onChange={() => handleSharingChange('single')} 
                checked={selectedSharing === 'single'} 
              />
              <p>Single Sharing</p>
            </div>
            <div className="inputWrapper flex gap-2">
              <input 
                type="checkbox" 
                onChange={() => handleSharingChange('double')} 
                onClick={doubleSharingHandle}
                checked={selectedSharing === 'double'} 
              />
              <p>Double Sharing</p>
            </div>
            <div className="inputWrapper flex gap-2">
              <input 
                type="checkbox" 
                onChange={() => handleSharingChange('triple')} 
                onClick={tripleSharingHandle}
                checked={selectedSharing === 'triple'} 
              />
              <p>Triple Sharing</p>
            </div>
          </div>
        </div>
        {/* Price Range */}
        {/* <div className="priceRange flex">
          <input 
            onChange={handleRangeInput} 
            className='range' 
            step={1000}
            min={4999} 
            max={9999} 
            type="range" 
          />
          <div className="rangeValue">
            <div className="firstValue">Rs. ₹{rangeValue}</div>
            <div className="lasValue">Rs. ₹9900</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PGFilter;
