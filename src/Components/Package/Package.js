import React from "react";
import './Package.css';

const Package = () => {
    return (
        <div className="container">
            <div>
                <h5>BECOME A PART OF US</h5>
                <h1>OUR MEMBERSHIPS</h1>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                <div className="col">
                    <div className="card text-white bg-dark mb-3">
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Dark card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-white bg-dark mb-3">
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Dark card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-white bg-dark mb-3">
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Dark card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Package;