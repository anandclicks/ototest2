import React, { useEffect } from 'react'

function Whychooseustwo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div><div class="feat bg-gray pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="section-head col-sm-12">
          <h4><span className='m-0 p-0'>Why Choose</span> Us?</h4>
          <p>Bring a ox full if hopes, dreans, ambitions.. And of course. Your personal beloongs.  Everything elses furniture, application, food has already been taken care of.</p>
        </div>
        <div class="col-lg-4 col-sm-6 whychooseuscard cursor-pointer">
          <div class="item"> <span class="spanfor3rdsecicon icon feature_box_col_one"><i class="fas fa-bed"></i></span>
            <h6>Tailored Comfort</h6>
            <p>At Otostays, we understand that comfort is personal. Our co-living and PG accommodations are thoughtfully designed to cater to the unique needs of students, working professionals, and bachelors, ensuring a home away from home that fits your lifestyle.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 whychooseuscard cursor-pointer">
          <div class="item"> <span class="spanfor3rdsecicon icon feature_box_col_two"><i class="fas fa-map-marker-alt"></i></span>
            <h6>Prime Locations</h6>
            <p>Strategically situated in vibrant neighborhoods, our properties offer easy access to educational institutions, corporate hubs, and essential amenities, making your daily commute a breeze and enhancing your overall living experience.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 whychooseuscard cursor-pointer">
          <div class="item"> <span class="spanfor3rdsecicon icon feature_box_col_three"><i class="fas fa-cog"></i></span>
            <h6>All-Inclusive Packages</h6>
            <p >Enjoy the convenience of hassle-free living with our all-inclusive packages. From high-speed internet and utilities to regular housekeeping and maintenance, we take care of the details so you can focus on what matters most.

            </p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 whychooseuscard cursor-pointer">
          <div class="item"> <span class="spanfor3rdsecicon icon feature_box_col_four"><i class="fas fa-clock"></i></span>
            <h6>Flexible Lease Terms</h6>
            <p>Whether you're here for a short-term internship or a long-term career move, our flexible lease options are designed to fit your schedule. We offer various lease lengths to accommodate your evolving needs. 
            Community-Centric Spaces
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 whychooseuscard cursor-pointer">
          <div class="item"> <span class="spanfor3rdsecicon icon feature_box_col_five"><i class="fas fa-users"></i></span>
            <h6>Community-Centric Spaces
            </h6>
            <p>Beyond just a place to stay, our co-living spaces foster a sense of community. Engage with like-minded individuals through our curated events and shared common areas, designed to enrich your social and professional network.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 whychooseuscard cursor-pointer">
          <div class="item"> <span class="spanfor3rdsecicon icon feature_box_col_six"><i class="fas fa-laptop"></i></span>
            <h6>Modern Amenities</h6>
            <p>Experience modern living with our state-of-the-art amenities. From fully-equipped kitchens and ergonomic workspaces to comfortable lounges and fitness centers, our properties are equipped to enhance your quality of life.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Whychooseustwo