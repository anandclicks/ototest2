// src/App.js
import React, { useContext, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { UserContextProvider } from "@/ContextApi/Usercontext"; // Using alias '@'
import Home from "./components/Home";
import Prasence from "./components/Prasence";
import Section3rd from "./components/Section3rd";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Navbar2 from "./components/Navbar2";
import WhychooseUs from "./components/WhychooseUs";
import Delhi from "./components/citylist/Delhi";
import NoidaALLPg from "./components/pgbycities/NoidaALLPg";
import GreaterNoida from "./components/citylist/GreaterNoida";
import Gurugram from "./components/citylist/Gurugram";
import Gaziyabad from "./components/citylist/Gaziyabad";
import Allpg from "./components/Allpgs/Allpg";
import Testimonials from "./components/Testimonials";
import Whychooseustwo from "./components/Whychooseustwo";
import Aboutus from "./components/Aboutuscomponents/Aboutus";
import Otoquility from "./components/Aboutuscomponents/Otoquility";
import Foorertwo from "./components/Foorertwo";
import Contact from "./components/Contact";
import Newpg from "./components/Newpg";

import Otobloomsec45 from "./components/towpg/MainPGDesign";
import { UserContext } from "./ContextApi/Usercontext";
import MainPGDesign from "./components/towpg/MainPGDesign";
import Noida from "./components/citylist/Noida";


function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {pgAllData} = useContext(UserContext)
  return (
    <UserContextProvider>
      <Navbar />
      <Routes>
        {/* Index Route */}
        <Route
          index
          element={
            <>
              <Home />
              <Prasence />
              <Otoquility />
              <Section3rd />
              <Testimonials />
              <Whychooseustwo />
            </>
          }
        />

        {/* Static Routes */}
        <Route path="/aboutus" element={<><Navbar2 /><Aboutus /></>} />
        <Route path="/newpg" element={<><Navbar2 /><Newpg /></>} />
        <Route path="/contactUs" element={<><Navbar2 /><Contact /></>} />
        <Route path="/explorepgs" element={<><Allpg /></>} />

        {/* City-Specific Routes */}
        <Route path="/pg-in-delhi" element={<><Delhi /></>} />
        <Route path="/pg-in-noida" element={<><Noida /></>} />
        <Route path="/pg-in-grater-noida" element={<><GreaterNoida /></>} />
        <Route path="/pg-in-gurugram" element={<><Gurugram /></>} />
        <Route path="/pg-in-gaziyabad" element={<><Gaziyabad /></>} />

        {/* Dynamic PG Route */}
        {pgAllData.map((item) => (
  <Route
    key={item.id} // It's good practice to add a unique key
    path={`${item.pageUrl}`}
    element={
      <MainPGDesign
        pgTitle={item.pgTitle}
        pgLocation={item.pgLocation}
        mapUrl={item.mapUrl}
        imageUrl={item.imageUrl}
        singleSharingPrice={item.singleSharingPrice}
        doubleSharingPrice={item.doubleSharingPrice}
        tripleSharingPrice={item.tripleSharingPrice}
        liveLocationUrl={item.liveLocationUrl}
        nearByLandmarkOne={item.nearByLandmarkOne}
        nearByLandmarkTwo={item.nearByLandmarkTwo}
        nearByLandmarkThree={item.nearByLandmarkThree}
        distanceFromPgOne={item.distanceFromPgOne}
        distanceFromPgTwo={item.distanceFromPgTwo}
        distanceFromPgThree={item.distanceFromPgThree}
      />
    }
  />
))}


        {/* Fallback Route */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
      <Foorertwo />
    </UserContextProvider>
  );
}

export default App;
