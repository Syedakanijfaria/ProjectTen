import React from "react";
import './Service.css';



const Service = ({ service }) => {
    const { name, type, img } = service;
    return (
        <div className="service">
            <img src={img} />
            <h2>{type}</h2>
            <h5>{name}</h5>

        </div>
    );
};



export default Service;