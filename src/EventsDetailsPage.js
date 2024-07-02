import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PortableText from '@sanity/block-content-to-react';
import { sanityFetch, urlFor } from './sanity/client';
import '../src/index.css'

const EVENT_QUERY = `*[
  _type == "event" &&
  slug.current == $slug
][0]{
  ...,
  headline->,
  venue->
}`;

const EventDetailsPage = () => {
    const { slug } = useParams();
    const [event, setEvent] = useState(null);



    useEffect(() => {
        const fetchEvent = async () => {
            const event = await sanityFetch({
                query: EVENT_QUERY,
                params: { slug },
            });
            setEvent(event);
        };
        fetchEvent();
    }, [slug]);

    if (!event) return <div>Loading...</div>;

    const {
        name,
        date,
        headline,
        image,
        details,
        eventType,
        doorsOpen,
        venue,
        tickets,
    } = event;
    const eventImageUrl = image ? urlFor(image)?.width(550).height(310).url() : null;
    const eventDate = new Date(date).toDateString();
    const eventTime = new Date(date).toLocaleTimeString();
    const doorsOpenTime = new Date(new Date(date).getTime() + doorsOpen * 60000).toLocaleTimeString();

    return (
        <main className="container mx-auto grid gap-12 p-12">
            <div className="mb-4">
                <Link to="/">← Back to events</Link>
            </div>
            <div className="grid items-top gap-12 sm:grid-cols-2">
                <img
                    src={eventImageUrl || "https://via.placeholder.com/550x310"}
                    alt={name || "Event"}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    height="310"
                    width="550"
                />
                <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-4">
                        {eventType && (
                            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 capitalize">
                                {eventType.replace("-", " ")}
                            </div>
                        )}
                        {name && <h1 className="text-4xl font-bold tracking-tighter mb-8">{name}</h1>}
                        {headline?.name && (
                            <table className="text-sm font-medium sm:gap-2 lg:text-base">
                                <tbody>
                                <tr>
                                    <td className="font-semibold">Artist</td>
                                    <td>{headline?.name}</td>
                                </tr>
                                </tbody>
                            </table>
                        )}
                        <table className="text-sm font-medium sm:gap-2 lg:text-base">
                            <tbody>
                            <tr>
                                <td className="font-semibold">Date</td>
                                <td>
                                    {eventDate && <div>{eventDate}</div>}
                                    {eventTime && <div>{eventTime} </div>}
                                </td>
                            </tr>
                            {doorsOpenTime && (
                                <tr>
                                    <td className="font-semibold">Doors Open</td>
                                    <td>{doorsOpenTime}</td>
                                </tr>
                            )}
                            {venue?.name && (
                                <tr>
                                    <td className="font-semibold">Venue</td>
                                    <td>{venue.name}</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                    {details && details.length > 0 && (
                        <div className="prose max-w-none">
                            <PortableText blocks={details} />
                        </div>
                    )}
                    {tickets && (
                        <a className="flex items-center justify-center rounded-md bg-blue-500 p-4 text-white" href={tickets}>
                            Buy Tickets
                        </a>
                    )}
                </div>
            </div>
        </main>
    );
};

export default EventDetailsPage;
