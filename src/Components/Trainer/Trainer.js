import React, { useEffect, useState } from 'react';
import './Trainer.css'

const Trainer = () => {
    const [data, setdata] = useState([]);
    //const dataSlice = data.slice(-2);

    useEffect(() => {
        fetch('./trainers.json')
            .then(res => res.json())
            .then(data => setdata(data));
    }, [])

    //console.log(data.slice(-2));
    return (
        <div className="teacher">
            <div className="container">
                <div className="col">
                    <h3 className="text-center text-decoration-underline mt-5 mb-5">Our Trainers</h3>
                    {/* fake person loading caontainer */}
                    <div className="row row-cols-1 row-cols-md-2 m-auto g-5">
                        {data.map((data) =>
                            <div className="col h6-4">
                                <div className="card bg-color shadow-lg mb-5 rounded card-hover">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src={data.img} className="w-100" alt="" />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card-body">
                                                <h5 className="card-title">Name: {data.name}</h5>
                                                <h6 className="card-text">Age: {data.age}</h6>
                                                <h6 className="card-text">Position: {data.role}</h6>
                                                <h6 className="card-text">Country: {data.country}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)}
                    </div>
                </div>
            </div>
        </div>);
};

export default Trainer;