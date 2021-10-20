import React from 'react';
import Banner from '../Banner/Banner.js';

const About = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
                <h1 className="text-center text-decoration-underline mt-5">About Us</h1>
            </div>
            <div className="row m-5 p-5">
                <div className="col-md-6">
                    <h5 className="text-warning text-decoration-underline " >Our Mission</h5>
                    <h2 className="mb-4"> Your Health is Our Priority</h2>
                    <p>Tempus quam pellentesque nec nam aliquam sem et tortor.In dictum non consectetur a erat nam at lectus.Lorem ipsum dolor sit amet consectetur adipiscing.Nibh nisl condimentum id venenatis a.In nulla posuere sollicitudin aliquam.Et egestas quis ipsum suspendisse ultrices gravida.Tempus quam pellentesque nec nam aliquam sem et tortor. In dictum non consectetur a erat nam at lectus. Lorem ipsum dolor sit amet consectetur adipiscing. Nibh nisl condimentum id venenatis a. In nulla posuere sollicitudin aliquam. Et egestas quis ipsum suspendisse ultrices gravida.Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis montes, nascetur ridiculus mus. Sed vitae rutrum neque.</p>
                </div>
                <div className="col-md-6 ms-auto">
                    <img className="w-100 mx-auto d-block" src="https://truefitness.com/wp-content/uploads/2017/11/Screenshot-2020-09-24-134557-1024x734.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;