import { UserContext } from "@/ContextApi/Usercontext";
import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import Amentiesmini from "../pgone/Amentiesmini";

function NoidaALLPg() {
  const { pgAllData } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="loading">Loading PGs...</div>;
  }

  const noidaPGs = pgAllData.filter((pg) => pg.city.toLowerCase() === "noida");

  return (
    <div className="row2 row h35 no-gutters">
      {noidaPGs.length > 0 ? (
        noidaPGs.map((pg) => {
          const discountPercentage = (
            ((parseFloat(pg.oldPrice) - parseFloat(pg.doubleSharingPrice)) / parseFloat(pg.oldPrice)) * 100
          ).toFixed(0);

          return (
            <Link
              to={pg.pageUrl}
              key={pg.id}
              className="hotel-card row no-gutters p-0 p-lg-2 w-100 col-12 position-relative mt-0 mt-lg-3 cursor-pointer text-decoration-none text-black"
            >
              <img
                className="col-12 col-lg-6 thumbnail w-full object-cover"
                src={`${pg.imageUrl}1.jpg`}
                alt={`${pg.pgTitle} Image`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/Allcitiesindividualpgs/default.jpg"; // Fallback image
                }}
              />
              <div className="col-12 col-lg-6 d-flex justify-content-start justify-content-lg-between">
                <div className="hotel-details d-flex flex-column justify-content-start justify-content-lg-between">
                  <div className="w-100 my-0 my-lg-2">
                    <h2 className="PgNameForCards">{pg.pgTitle}</h2>
                    <p>{pg.pgLocation}</p>
                  </div>
                  <Amentiesmini />
                  <div className="prices w-100 my- my-lg-2">
                    <p className="price my-2 my-lg-0 p24px">
                      ₹{pg.doubleSharingPrice}{" "}
                      <span className="original-price">₹{pg.oldPrice}</span>{" "}
                      {discountPercentage}% off
                    </p>
                  </div>
                </div>
                <div className="button-container position-absolute end-0 bottom-0 btnBoxcard m-1 m-lg-3">
                  <button className="bg-transparent text-black viewDtsl" aria-label={`View details of ${pg.pgTitle}`}>
                    View Details
                  </button>
                  <button className="btn bg-black bookPg" aria-label={`Book ${pg.pgTitle} now`}>
                    Book Now
                  </button>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <p>No PGs available in Noida.</p>
      )}
    </div>
  );
}

export default NoidaALLPg;
