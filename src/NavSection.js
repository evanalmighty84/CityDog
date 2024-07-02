import React, { useState } from 'react';

const NavSection = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div>
            <nav className="bg-light shadow-lg">
                <div className="container mx-auto flex flex-wrap items-center justify-between py-4">
                    <a className="text-2xl font-bold" href="/">
                        Citydog!
                    </a>
                    <button
                        className="text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none lg:hidden"
                        type="button"
                        onClick={toggleNavbar}
                        aria-expanded={!isCollapsed}
                        aria-label="Toggle navigation"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isCollapsed ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
                            ></path>
                        </svg>
                    </button>
                    <div className={`w-full lg:flex lg:items-center lg:w-auto ${isCollapsed ? 'hidden' : 'block'}`}>
                        <ul className="lg:flex lg:justify-center lg:items-center w-full lg:w-auto mt-4 lg:mt-0">
                            <li className="nav-item active lg:ml-4">
                                <a className="block lg:inline-block text-gray-700 hover:text-gray-900 py-2 px-4" href="#hero">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item lg:ml-4">
                                <a className="block lg:inline-block text-gray-700 hover:text-gray-900 py-2 px-4" href="/#">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item lg:ml-4">
                                <a className="block lg:inline-block text-gray-700 hover:text-gray-900 py-2 px-4" href="/#locations">
                                    Locations
                                </a>
                            </li>
                            <li className="nav-item lg:ml-4">
                                <a className="block lg:inline-block text-gray-700 hover:text-gray-900 py-2 px-4" href="/#services">
                                    Services
                                </a>
                            </li>
                            <li className="nav-item lg:ml-4">
                                <a className="block lg:inline-block text-gray-700 hover:text-gray-900 py-2 px-4" href="/#events">
                                    Events
                                </a>
                            </li>
                            <li className="nav-item lg:ml-4">
                                <a className="block lg:inline-block text-gray-700 hover:text-gray-900 py-2 px-4" href="/SignIn">
                                    Citydog! Login
                                </a>
                            </li>
                            <li className="nav-item lg:ml-4">
                                <a className="block lg:inline-block text-gray-700 hover:text-gray-900 py-2 px-4" href="/SignUp">
                                    Citydog! Sign Up
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavSection;
