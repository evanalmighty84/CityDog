import React, { useEffect, useState } from 'react';

const FooterSection = () => {
    return <div >    <footer className="site-footer" id="locations">
        <div style={{textAlign:'center'}} className="container">
            <div className="row">
                <div className="col-12">
                    <h5 className="text-white">
                        <i className="bi-geo-alt-fill me-2"></i>
                        3870 Ponte Ave, Addison, TX 75001
                    </h5>
                    <a href="mailto:info@company.com" className="custom-link mt-3 mb-5">
                        info@cityDogClub.com
                    </a>
                </div>

                <div className="">
                    <ul className="social-icon">
                        <h1 style={{fontSize:'large'}}>Our Sponsors</h1>
                        <li>
                            <a href="#" className="">
                                Petco
                            </a>
                        </li>
                        <br/>
                        <li>
                            <a href="#" className="">
                             Furry Friends Adoption Center
                            </a>
                        </li>
                        <br/>
                        <li>
                            <a href="#" className="">
                               Dallas Cowboys
                            </a>
                        </li>
                        <br/>
                        <li>
                            <a href="#" className="">
                                Girl Scouts of America
                            </a>
                        </li>
                        <br/>
                        <li>
                            <a href="#" className=""></a>
                        </li>
                    </ul>
                </div>
                {/*      <div className="col-12">
                <p className="copyright-text mb-0">
                  Copyright © PSA 2024 <br />
                  <br />
                  Design: <a href="https://templatemo.com/page/1" target="_parent">
                  Theme 3
                </a>
                  <br />
                  <br />
                  Distributed By: <a href="https://themewagon.com/" target="_blank">
                  Clubhouse Links
                </a>
                </p>
              </div>*/}
            </div>
        </div>
    </footer> </div>;
};

export default FooterSection;