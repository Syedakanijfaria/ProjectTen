import React, { useEffect, useState } from "react";
import { useParams } from "react-router";


const Details = () => {

    const { serviceId } = useParams();

    const [serviceDetails, setServiceDetails] = useState([]);

    const [singleService, setSingleService] = useState({});

    useEffect(() => {
        fetch("servicedetails.json")
            .then((res) => res.json())
            .then((data) => setServiceDetails(data.service));
    }, []);

    useEffect(() => {
        const foundService = serviceDetails.find(
            (service) => service.login.id === serviceId
        );
        setSingleService(foundService);
    }, [serviceDetails]);


    return (
        <div className="container">
            <h1>{serviceId}</h1>
            <h1>this is booking: {singleService?.name}</h1>
            <div className="row">
                <div className="col col-rows-1 col=-rows-md-1 g-4">
                    <div class="card" >
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Details;