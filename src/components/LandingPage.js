import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/bootstrap.min.css';
import '../css/bootstrap-icons.css';
import '../css/magnific-popup.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/aos.css';
import '../css/templatemo-nomad-force.css';
import Header from './Header';

import PortfolioImage1 from '../images/people/Soccer1.jpg';

const Soccer = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
        });
        AOS.refresh();
    }, []);

    return (
        <div>
            <Header />
            <section className="section-padding" id="soccer">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="mb-5 text-center" data-aos="fade-up">
                                Soccer
                            </h2>
                        </div>
                        <div className="col-lg-12 col-12">
                            <div className="portfolio-thumb mb-5" data-aos="fade-up">
                                <img src={PortfolioImage1} className="img-fluid portfolio-image" alt="Soccer" />
                                <div className="portfolio-info">
                                    <h4 className="portfolio-title mb-0">Soccer</h4>
                                    <p className="text-danger">June 1st - August 8th</p>
                                </div>
                            </div>
                            <div data-aos="fade-up">
                                <p>
                                    Plano Sports Authority (PSA) offers the largest nonprofit youth soccer program in Texas with over 500 teams participating in our Soccer Leagues each season.  We offer year-round soccer in Recreational, Competitive, and Club/Select levels (Texas Thunder).  We also offer skills classes if you are looking for extra touches on the ball.  Come and experience what PSA has continued to provide to thousands of players and families!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Soccer;
