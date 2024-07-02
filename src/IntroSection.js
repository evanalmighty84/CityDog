import React, { useEffect, useState } from 'react';
import HeroPoster from "./videos/vecteezy_the-vet-is-taking-the-pug-dog-on-her-arms_35314315 (1).mp4";
import HeroVideo from "./videos/vecteezy_the-vet-is-taking-the-pug-dog-on-her-arms_35314315 (1).mp4";

const IntroSection = () => {
    return <div >           <section className="hero" id="hero">
        <div className="heroText">
            <h1 className="text-white mt-5 mb-lg-4" data-aos="zoom-in" data-aos-delay="800">
                Citydog! Club
            </h1>
            <p className="text-secondary-white-color" data-aos="fade-up" data-aos-delay="1000">
                Make them feel  <strong className="custom-underline">loved</strong>
            </p>
        </div>
        <div className="videoWrapper">
            <video
                autoPlay
                loop
                muted
                className="custom-video"
                poster={HeroPoster}
            >
                <source src={HeroVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        <div className="overlay"></div>
    </section> </div>;
};

export default IntroSection;