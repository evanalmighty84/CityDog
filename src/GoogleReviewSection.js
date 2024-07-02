import React from 'react';
import GoogleLogo from './images/googlelogo.png'

const GoogleReviewSection = () => {
    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">

            <div className="max-w-3xl mx-auto">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    {/* Google Review Header */}
                    <div className="px-4 py-5 sm:px-6 bg-blue-600">
                        <div className="flex items-center justify-between">
                            <h2 className="text-white text-2xl font-bold">Google Reviews for CityDog!</h2>
                            <img
                                className="h-12 w-12"
                                src={GoogleLogo}
                                alt="Google Logo"
                            />
                        </div>
                    </div>

                    {/* Review Section */}
                    <div className="border-t-2 border-blue-600">
                        <div className="px-4 py-5 sm:px-6">
                            <div className="flex items-center mb-4">
                                <svg
                                    className="h-6 w-6 text-blue-600 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <h3 className="text-lg font-semibold">Positive Reviews</h3>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2 border-yellow-500">
                                <div className="text-sm text-gray-500 sm:col-span-2">
                                    <p className="mb-2">"Great facility! The staff are friendly and caring. My dog loves coming here!"</p>
                                    <p className="font-bold">- John Doe</p>
                                    <p className="text-gray-500">5 stars</p>
                                </div>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2 border-yellow-500">
                                <div className="text-sm text-gray-500 sm:col-span-2">
                                    <p className="mb-2">"CityDog! provides excellent service. They go above and beyond for our furry friends."</p>
                                    <p className="font-bold">- Jane Smith</p>
                                    <p className="text-gray-500">5 stars</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoogleReviewSection;
