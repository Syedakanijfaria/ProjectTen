import React from "react";
import Banner from "../Banner/Banner.js";

import './Package.css';



const Package = () => {

    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="container">
                <div className="text-center mt-5 mb-5">
                    <h5 className="text-warning" >BECOME A PART OF US</h5>
                    <h1 className="text-decoration-underline" >OUR MEMBERSHIPS</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                    <div className="col">
                        <div className="card shadow-lg mb-5 rounded text-white bg-color mb-3">
                            <div className="card-body">
                                <h4 className="card-title">BEGINNER PLAN</h4>
                                <h1 className="text-warning">$40</h1>
                                <h5 className="text-warning">FOR ROOKIES</h5>
                                <p className="card-text">Unlimited access to the gym</p>
                                <p className="card-text">3 classes per week</p>
                                <p className="card-text">One Year memberships</p>
                                <p className="card-text">FREE drinking package</p>
                                <p className="card-text text-warning">1 Free personal training</p>
                            </div>
                        </div>
                        <div className="d-grid gap-2 button-hover">
                            <button className="btn btn-warning" type="button">SELECT PLAN</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg mb-5 rounded text-white bg-color mb-3">
                            <div className="card-body">
                                <h4 className="card-title">PREMIUM PLAN</h4>
                                <h1 className="text-warning">$60</h1>
                                <h5 className="text-warning">FOR FITNESS LOVERS</h5>
                                <p className="card-text">Unlimited access to the gym</p>
                                <p className="card-text">5 classes per week</p>
                                <p className="card-text">One Year memberships</p>
                                <p className="card-text">FREE drinking package</p>
                                <p className="card-text text-warning">2 Free personal training</p>
                            </div>
                        </div>
                        <div className="d-grid gap-2 button-hover">
                            <button className="btn btn-warning" type="button">SELECT PLAN</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg mb-5 rounded text-white bg-color mb-3">
                            <div className="card-body">
                                <h4 className="card-title">ULTIMATE PLAN</h4>
                                <h1 className="text-warning">$80</h1>
                                <h5 className="text-warning">FOR THE ADDICTED</h5>
                                <p className="card-text">Unlimited access to the gym</p>
                                <p className="card-text">7 classes per week</p>
                                <p className="card-text">One Year memberships</p>
                                <p className="card-text">FREE drinking package</p>
                                <p className="card-text text-warning">7 Free personal training</p>
                            </div>
                        </div>
                        <div className="d-grid gap-2 button-hover">
                            <button className="btn btn-warning" type="button">SELECT PLAN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Package;