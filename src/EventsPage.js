import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {sanityFetch, urlFor} from './sanity/client';
import '../src/index.css'

const EVENTS_QUERY = `*[_type == "event"]{_id, name, slug, date, image}|order(date desc)`;

const EventsPage = () => {
    const [events, setEvents] = useState([]);



    useEffect(() => {
        const fetchEvents = async () => {
            const events = await sanityFetch({ query: EVENTS_QUERY });
            setEvents(events);
        };
        fetchEvents();
    }, []);


    return (
        <main className="flex bg-yellow-400 min-h-screen flex-col p-24 gap-12" id="events">
            <h1 style={{color:'white',textAlign:'center'}} className="text-4xl font-bold tracking-tighter">Upcoming Events</h1>
            <ul className="grid grid-cols-1 gap-12 lg:grid-cols-2">

                {events.map((event) => (

                    <li className="bg-white p-4 rounded-lg" key={event._id}>
                        <Link className="hover:underline" to={`/events/${event.slug.current}`}>
                            <h2 className="text-xl font-semibold">{event?.name}</h2>
                            {/* Render the image if it exists */}
                            {event?.image && (
                                <img
                                    src={urlFor(event.image).url()}
                                    alt={event.name}
                                    className="w-full h-auto mt-4 rounded-lg"
                                />
                            )}
                            <p className="text-gray-500">{new Date(event?.date).toLocaleDateString()}</p>
                        </Link>
                    </li>
                ))}
            </ul>

        </main>
    );
};

export default EventsPage;
