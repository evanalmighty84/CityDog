import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './css/bootstrap.min.css';
import './css/bootstrap-icons.css';
import './css/magnific-popup.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/aos.css';
import './css/templatemo-nomad-force.css';
import EventsPage from "./EventsPage";
import NavSection from "./NavSection";
import AboutSection from "./About";
import FeedBack from "./Feedback";
import GoogleMapSection from "./GoogleMapSection";
import FooterSection from "./FooterSection";
import ServicesSection from "./ServicesSection";
import IntroSection from "./IntroSection";
import EventDetailsPage from "./EventsDetailsPage";
import './index.css'
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import ProfilePage from "./components/profile/ProfilePage";
import GoogleReviewSection from "./GoogleReviewSection";

const App = () => {


  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
      <div>
        <Routes>
          <Route
              path="/"
              element={
              <div>
                  <NavSection/>
                <main>

                  <IntroSection/>

                  <AboutSection/>
                  <ServicesSection/>
                  <EventsPage/>
                  <FeedBack/>
                    <GoogleReviewSection/>
                </main>
                  </div>
              }
              />
          <Route path="/events/:slug" element={<EventDetailsPage />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp/>} />
            <Route path="/Profile" element={<ProfilePage/>} />
        </Routes>
          <GoogleMapSection/>
<FooterSection/>

      </div>
  );
};

export default App;
