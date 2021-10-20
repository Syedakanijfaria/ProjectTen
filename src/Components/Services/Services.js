import React, { useEffect, useState } from 'react';
import Service from '../Service/Service.js';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));

    }, [])

    return (
        <div className="services">
            <div className="m-5 p-5">
                <h5 className=" text-center text-warning">WHAT WE CAN OFFER</h5>
                <h1 className=" text-center text-decoration-underline">Our Services</h1>
                <div className="row mt-5">
                    <div className="col">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                services.map
                                    (service =>
                                        <Service
                                            key={service.key}
                                            service={service}
                                        ></Service>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;