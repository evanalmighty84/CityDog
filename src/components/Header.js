import React from 'react';
import '../css/bootstrap.min.css';
import '../css/bootstrap-icons.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light shadow-lg">
            <div className="container">
                <a className="navbar-brand" href="index.html">
                    <strong>Citydog!</strong>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#hero">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">
                                Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">
                                Features
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#news">
                                The Pack
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#news">
                                Locations
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#news">
                                City dog Login
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#news">
                                City Dog  Sign Up
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
