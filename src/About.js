import React, { useState, useEffect } from 'react';

import ElenaImage from "./images/pexels-yaroslav-shuraev-9632398.jpg";
import Image3 from "./images/people/vecteezy_doctor-examines-sick-dog-ai-generated_28622043.jpg";
import Image4 from "./images/people/vecteezy_ai-generated-happy-veterinary-clinic-vibes_40513845.jpg";
import Image1 from "./images/people/vecteezy_ai-generated-doctor-poses-with-a-dog-in-front-of-a-blue_38819562.jpeg";
import Image2 from "./images/people/vecteezy_ai-generated-doctor-poses-with-a-dog-in-front-of-a-blue_38819564.jpeg";
import Image5 from "./images/people/working-business-lady.jpg";


const AboutSection = () => {
    const [carouselIndex, setCarouselIndex] = useState(0);

    const handleCarouselControl = (direction) => {
        if (direction === 'prev') {
            setCarouselIndex((prevIndex) => (prevIndex === 0 ? 4 : prevIndex - 1));
        } else {
            setCarouselIndex((prevIndex) => (prevIndex === 4 ? 0 : prevIndex + 1));
        }
    };

    return <div >
    <section className="section-padding pb-0" id="about">
        <div className="container mb-5 pb-lg-5">
            <div className="row">
                <div className="col-12">
                    <h2 className="mb-3" data-aos="fade-up">
                        CityDog!
                    </h2>
                </div>
                <div className="col-lg-6 col-12 mt-3 mb-lg-5">
                    <p className="me-4" data-aos="fade-up" data-aos-delay="300">
                        Give dogs what they need and love{' '}
                        <a rel="nofollow" href="http://paypal.me/templatemo" target="_blank">
                            socialization, play, naps and exercise, along with a lot of love in our irresistible open
                            play environment.
                        </a>{' '}
                        Citydog! Club dog daycare includes complimentary basic training provided for intellectual
                        stimulation. <a rel="nofollow" href="https://templatemo.com/tm-567-nomad-force"
                                        target="_parent">
                        PSA provides quality year-round recreational and competitive youth sports leagues
                    </a>{' '}
                        Dogs will fall in love with our alpha dog handlers who are lovable, compassionate and
                        assertive. <br/>
                    </p>
                </div>
                <div className="col-lg-6 col-12 mt-lg-3 mb-lg-5">
                    <p data-aos="fade-up" data-aos-delay="500">
                        Go on a guilt free trip knowing your best friend is having as much fun as you – maybe more!
                        This is not your average boarding kennel. In fact, we don't even like the word kennel because
                        it is more like a home away from home for your dog. It's more like an "un-kennel."
                        Watch your precious pup via our live Citydog! Webcam.
                        Dogs enjoy a comfortable night’s sleep on veterinarian recommended Kuranda™ beds while dozing
                        off to dreamy chill music.
                        Dogs are never left alone. Our overnight Watchdog! ensures each dog is safe and sound
                    </p>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 col-12 p-0">
                    <img src={ElenaImage} className="img-fluid about-image" alt=""/>
                </div>
                <div className="col-lg-3 col-12 bg-dark">
                    <div
                        className="d-flex flex-column flex-wrap justify-content-center h-100 py-5 px-4 pt-lg-4 pb-lg-0">
                        <h3 className="text-white mb-3" data-aos="fade-up">
                            Our promise to the Citydogs! is to keep them safe and sound, and ensure that they receive
                            the best dog boarding experience
                        </h3>
                        {/*<p className="text-secondary-white-color" data-aos="fade-up">
                            Over 50 years serving community involvement
                        </p>
                        <div className="mt-3 custom-links">
                            <a href="#news" className="text-white custom-link" data-aos="zoom-in" data-aos-delay="100">
                                Read News & Events
                            </a>
                            <a href="#contact" className="text-white custom-link" data-aos="zoom-in"
                               data-aos-delay="300">
                                Work with Us
                            </a>
                        </div>*/}
                    </div>
                </div>
                <div className="col-lg-6 col-12 p-0">
                    <section id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className={`carousel-item ${carouselIndex === 0 ? 'active' : ''}`}>
                                <img src={Image3} className="img-fluid team-image" alt=""/>
                                <div className="team-thumb bg-warning">
                                    <h3 className="text-white mb-0">Mallory R.</h3>
                                    <p className="text-secondary-white-color mb-0">Small Breeds Groomer</p>
                                </div>
                            </div>
                            <div className={`carousel-item ${carouselIndex === 1 ? 'active' : ''}`}>
                                <img src={Image4} className="img-fluid team-image" alt=""/>
                                <div className="team-thumb bg-primary">
                                    <h3 className="text-white mb-0">Morgan S.</h3>
                                    <p className="text-secondary-white-color mb-0">Large Breeds Groomer</p>
                                </div>
                            </div>
                            <div className={`carousel-item ${carouselIndex === 2 ? 'active' : ''}`}>
                                <img src={Image1} className="img-fluid team-image" alt=""/>
                                <div className="team-thumb bg-success">
                                    <h3 className="text-white mb-0">Patrick W.</h3>
                                    <p className="text-secondary-white-color mb-0">In House Vet</p>
                                </div>
                            </div>
                            <div className={`carousel-item ${carouselIndex === 3 ? 'active' : ''}`}>
                                <img src={Image2} className="img-fluid team-image" alt=""/>
                                <div className="team-thumb bg-info">
                                    <h3 className="text-white mb-0">Robinson H.</h3>
                                    <p className="text-secondary-white-color mb-0">Dog/Cat Grooming Director</p>
                                </div>
                            </div>
                            <div className={`carousel-item ${carouselIndex === 4 ? 'active' : ''}`}>
                                <img src={Image5} className="img-fluid team-image" alt=""/>
                                <div className="team-thumb bg-danger">
                                    <h3 className="text-white mb-0">Rachel M.</h3>
                                    <p className="text-secondary-white-color mb-0">Owner of Doggy Palace</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button"
                                onClick={() => handleCarouselControl('prev')}>
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button"
                                onClick={() => handleCarouselControl('next')}>
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </section>
                </div>
            </div>
        </div>
    </section>
    </div>
}
export default AboutSection