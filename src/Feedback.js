import React, { useEffect, useState } from 'react';

const FeedBack = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        services: {
            branding: false,
            digitalExperiences: false,
            webDevelopment: false,
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to server)
        console.log('Form submitted:', formData);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                services: { ...formData.services, [name]: checked },
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };
    return <div >     <section className="contact section-padding" id="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 col-12 mx-auto">
                    <h2 className="mb-4 text-center" data-aos="fade-up">
                Schedule an Appointment
                    </h2>
                    <form onSubmit={handleSubmit} className="contact-form" role="form" data-aos="fade-up">
                        {/*       <div className="row">
                      <div className="col-lg-6 col-6">
                        <label htmlFor="name" className="form-label">
                          Name <sup className="text-danger">*</sup>
                        </label>
                        <input type="text" name="name" id="name" className="form-control" placeholder="Full name" required value={formData.name} onChange={handleInputChange} />
                      </div>
                      <div className="col-lg-6 col-6">
                        <label htmlFor="email" className="form-label">
                          Email <sup className="text-danger">*</sup>
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            pattern="[^ @]*@[^ @]*"
                            className="form-control"
                            placeholder="Email address"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-12 my-4">
                        <label htmlFor="message" className="form-label">
                          How can we help?
                        </label>
                        <textarea
                            name="message"
                            rows="6"
                            className="form-control"
                            id="message"
                            placeholder="Tell us about the project"
                            required
                            value={formData.message}
                            onChange={handleInputChange}
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <label htmlFor="services" className="form-label">
                          Services<sup className="text-danger">*</sup>
                        </label>
                      </div>
                      <div className="col-lg-4 col-12">
                        <div className="form-check">
                          <input type="checkbox" id="branding" name="branding" className="form-check-input" checked={formData.services.branding} onChange={handleInputChange} />
                          <label className="form-check-label" htmlFor="branding">
                            Branding
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-4 col-12 my-2 my-lg-0">
                        <div className="form-check">
                          <input type="checkbox" id="digitalExperiences" name="digitalExperiences" className="form-check-input" checked={formData.services.digitalExperiences} onChange={handleInputChange} />
                          <label className="form-check-label" htmlFor="digitalExperiences">
                            Digital Experiences
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-4 col-12">
                        <div className="form-check">
                          <input type="checkbox" id="webDevelopment" name="webDevelopment" className="form-check-input" checked={formData.services.webDevelopment} onChange={handleInputChange} />
                          <label className="form-check-label" htmlFor="webDevelopment">
                            Web Development
                          </label>
                        </div>
                      </div>
                    </div>*/}
                        <div className="col-lg-5 col-12 mx-auto mt-5">
                            <button type="submit" className="form-control">
                               Book
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section></div>;
};

export default FeedBack;