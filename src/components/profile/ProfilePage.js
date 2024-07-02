import React from 'react';
import NavSection from '../../NavSection';
import Trophy from '../../images/3d-casual-life-trophy-cup.png'
import RecordingLight from '../../images/Animation - 1719937817035.gif'

const ProfilePage = () => {
    return (
        <div>
            <NavSection />
            <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        {/* User Profile Header */}
                        <div className="px-4 py-5 sm:px-6 bg-yellow-500">
                            <div className="flex items-center">
                                <h2 style={{ margin: 'auto' }}>
                                    <span style={{ color: 'white', padding: '5px', borderRadius: '5px' }}>Citydog!</span>{' '}
                                    <span style={{ color: 'black' }}>Addison</span>
                                </h2>

                            </div>
                        </div>

                        <div className="border-t-2 border-yellow-400">
                            <dl>
                                {/* Client Name */}
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2 border-yellow-400">
                                    <dt className="text-sm font-medium text-gray-500">Pet Parent</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">Haley Lawson</dd>
                                </div>

                                {/* Dogs Names */}
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2 border-yellow-400">
                                    <dt className="text-sm font-medium text-gray-500">Dog Names</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                                        <ul className="list-disc">
                                            <li>Rex</li>
                                            <li>Bella</li>
                                        </ul>
                                    </dd>
                                </div>

                                {/* Veterinarian Records */}
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2 border-yellow-400">
                                    <dt className="text-sm font-medium text-gray-500">Veterinarian Records</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                                        <ul className="list-disc">
                                            <li>Annual checkup - 2023</li>
                                            <li>Vaccination - 2022</li>
                                        </ul>
                                    </dd>
                                </div>

                                {/* Eating Schedules */}
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2 border-yellow-400">
                                    <dt className="text-sm font-medium text-gray-500">Eating Schedules</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                                        <ul className="list-disc">
                                            <li>Breakfast - 8:00 AM</li>
                                            <li>Dinner - 6:00 PM</li>
                                        </ul>
                                    </dd>
                                </div>

                                {/* Rewards */}
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2 border-yellow-400">
                                    <dt className="text-sm font-medium text-gray-500 flex items-center">
                                       <img width="50%" src={Trophy}/>


                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                                        <ul className="list-disc">
                                            <li>10% discount on next grooming</li>
                                        </ul>
                                    </dd>
                                </div>

                                {/* Address and Contact Info */}
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2 border-yellow-400">
                                    <dt className="text-sm font-medium text-gray-500">Address & Contact Info</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                                        <address>
                                            123 Main St<br />
                                            City, State, Zip Code<br />
                                            <a href="mailto:john.doe@example.com">john.doe@example.com</a><br />
                                            <a href="tel:+1234567890">(123) 456-7890</a>
                                        </address>
                                    </dd>
                                </div>

                                {/* Video Section */}
                                {/* Video Section */}
                                {/* Video Section */}
                                <div className="bg-gray-50 px-4 py-5 sm:px-6 border-b-2 border-yellow-400">
                                    <div className="sm:grid sm:grid-cols-2 sm:gap-4">
                                        {/* Videos List */}
                                        <div>
                                            <dt className="text-sm font-medium text-gray-500">Videos</dt>
                                            <dd className="mt-1 text-sm text-gray-900">
                                                <ul className="list-disc">
                                                    <li>
                                                        <a href="https://res.cloudinary.com/duz4vhtcn/video/upload/v1719814596/7199253-uhd_2160_3840_25fps_hnwohg.mp4" className="text-yellow-500 hover:underline">
                                                            Rex takes passes dog training
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="text-yellow-500 hover:underline">
                                                            Bella chases her tail
                                                        </a>
                                                    </li>
                                                </ul>
                                            </dd>
                                        </div>
                                        {/* Recording GIF and Text */}
                                        <div className="flex items-center mt-4">
                                            <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600">
                                                Make New Recording
                                            </button>
                                            <img width="24" src={RecordingLight} alt="Recording Light" className="animate-pulse ml-2 -mt-1" />
                                        </div>
                                    </div>
                                </div>



                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
