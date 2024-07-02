import React, { useEffect, useState } from 'react';
import PortfolioImage1
    from "./images/people/vecteezy_pet-hairdresser-woman-cutting-fur-of-cute-yellow-dog_11930357.jpg";
import PortfolioImage2 from "./images/people/vecteezy_dog-in-real-life-happy-moment-with-pet_24637503.jpg";
import PortfolioImage3 from "./images/service_sleepeat-horizontal2.jpg";
import PortfolioImage4
    from "./images/people/vecteezy_ai-generated-globe-books-and-cute-dog-in-graduation-cap-on_37227259.jpeg";

const ServicesSection = () => {
    return <div >       <section className="section-padding" id="services">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="mb-5 text-center" data-aos="fade-up">
                        Services
                    </h2>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="portfolio-thumb mb-5" data-aos="fade-up">
                        <a href={PortfolioImage1} className="image-popup">
                            <img src={PortfolioImage1} className="img-fluid portfolio-image" alt="" />
                        </a>
                        <div className="portfolio-info">
                            <h4 className="portfolio-title mb-0">Grooming</h4>
                            <p className="text-danger">7 days a week. Available 365 days</p>
                        </div>
                    </div>
                    <div className="portfolio-thumb" data-aos="fade-up">
                        <a href={PortfolioImage2} className="image-popup">
                            <img src={PortfolioImage2} className="img-fluid portfolio-image" alt="" />
                        </a>
                        <div className="portfolio-info">
                            <h4 className="portfolio-title mb-0">Daycamp</h4>
                            <p className="text-success">June 6th- August 1st</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="portfolio-thumb mt-5 mt-lg-0 mb-5" data-aos="fade-up">
                        <a href={PortfolioImage3} className="image-popup">
                            <img src={PortfolioImage3} className="img-fluid portfolio-image" alt="" />
                        </a>
                        <div className="portfolio-info">
                            <h4 className="portfolio-title mb-0">Boarding</h4>
                            <p className="text-warning">Luxury boarding facilities with three different rooms to choose from. We also
                                have a cat room.</p>
                        </div>
                    </div>
                    <div className="portfolio-thumb" data-aos="fade-up">
                        <a href={PortfolioImage4} className="image-popup">
                            <img src={PortfolioImage4} className="img-fluid portfolio-image" alt="" />
                        </a>
                        <div className="portfolio-info">
                            <h4 className="portfolio-title mb-0">Training</h4>
                            <p className="text-info">June 2nd - August 11th</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section></div>;
};

export default ServicesSection;