import React, { useEffect, useState } from 'react';

const GoogleMapSection = () => {
    return <div >    <section className="google-map">
        <iframe
            src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Addison+Texas+-+RJ,+Unted States&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="map-iframe"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
        ></iframe>
    </section> </div>;
};

export default GoogleMapSection;