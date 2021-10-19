import React from "react";
import { Link } from "react-router-dom";
import './Service.css';



const Service = ({ service }) => {
    const { key, name, type, img } = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h2>{type}</h2>
            <h5>{name}</h5>
            <Link to={`/details/${key}`}>
                <button>{name.toUpperCase()} More Details </button>
            </Link>
        </div>
    );
};



export default Service;