import React from "react";
import { Link } from "react-router-dom";
import './Service.css';



const Service = ({ service }) => {
    const { key, name, type, img } = service;
    return (
        <div className="col">
            <div className="card h-100 card-hover">
                <img src={img} alt="" />
                <div className="card-body">
                    <h2>{type}</h2>
                    <h5>{name}</h5>
                    <Link to={`/details/${key}`}>
                        <button className="btn btn-warning">{name.toUpperCase()} MORE DETAILS</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};



export default Service;