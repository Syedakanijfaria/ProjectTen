import React from "react";



const Service = (service) => {
    const { name, type, img } = service;
    return (
        <div>
            <h2>{name}</h2>
            <h2>{type}</h2>
        </div>
    );
};



export default Service;