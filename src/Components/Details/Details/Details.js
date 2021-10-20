import React, { useEffect, useState } from "react";
import { useParams } from "react-router";


const Details = () => {

    const { serviceId } = useParams();

    const [serviceDetails, setServiceDetails] = useState([]);

    const [singleService, setSingleService] = useState({});

    useEffect(() => {
        fetch("/servicesdetails.json")
            .then(res => res.json())
            .then(data => setServiceDetails(data.service));
    }, []);

    useEffect(() => {
        const foundService = serviceDetails.find(service => service.login.key === serviceId)
        setSingleService(foundService)

    }, [serviceDetails])


    return (
        <div className="container">
            <div className="row">
                <div className="col col-rows-1 col=-rows-md-1 g-4">
                    <div className="card" >
                        <img src={singleService?.picture?.thumbnail} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">{singleService?.name}</h3>
                            <p className="card-text">{singleService?.des}</p>
                            <h6>Phone: {singleService?.phone}</h6>
                            <h6>Email: {singleService?.email}</h6>
                            <h6>Location: {singleService?.location?.street},{singleService?.location?.city}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Details;