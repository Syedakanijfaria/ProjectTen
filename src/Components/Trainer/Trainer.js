import React, { useEffect, useState } from 'react';

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
            <div className="row">
                <div className="col">
                    <h3 className="text-center text-decoration-underline mt-5 mb-5">Our Trainers</h3>
                    {/* fake person loading caontainer */}
                    <div className="row row-cols-1 row-cols-md-2 m-auto g-5">
                        {data.map((data) =>
                            <div className="col">
                                <div className="card">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={data.img} className="img-fluid" alt="" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Name: {data.name}</h5>
                                                <p className="card-text">Age: {data.age}</p>
                                                <p className="card-text">Position: {data.role}</p>
                                                <p className="card-text">Country: {data.country}</p>
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