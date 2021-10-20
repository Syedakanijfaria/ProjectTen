import React from 'react';
import Banner from '../Banner/Banner.js';

const About = () => {
    return (
        <div>
            <div>
                <Banner>

                </Banner>
            </div>
            <div className="about">
                {/* About information container */}
                <h2 className="text-center text-decoration-underline mt-5">About Us</h2>
                <div className="w-75 m-auto">
                    <p className="text-center">Tempus quam pellentesque nec nam aliquam sem et tortor. In dictum non consectetur a erat nam at lectus. Lorem ipsum dolor sit amet consectetur adipiscing. Nibh nisl condimentum id venenatis a. In nulla posuere sollicitudin aliquam. Et egestas quis ipsum suspendisse ultrices gravida.Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis montes, nascetur ridiculus mus. Sed vitae rutrum neque.
                    </p>
                    {/* <img className="w-75 mx-auto d-block" src="https://quotefancy.com/media/wallpaper/3840x2160/1699923-Steve-Jobs-Quote-Learn-continually-There-s-always-one-more-thing.jpg" alt="" /> */}
                </div>
                {/* some important talks about our services quality */}
                <div className="">
                    <h3 className="text-center text-decoration-underline mt-5 mb-5">Why students love EduPack ?</h3>
                    <div className="row m-auto">
                        <div className="col-md-3">
                            <h5>Courses lead to recruitment</h5>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                        </div>
                        <div className="col-md-3">
                            <h5>Creative learning</h5>
                            <p>Nibh nisl condimentum id venenatis a. In nulla posuere sollicitudin aliquam. Et egestas quis ipsum suspendisse ultrices gravida.</p>
                        </div>
                        <div className="col-md-3">
                            <h5>Learn with experts</h5>
                            <p>Nibh nisl condimentum id venenatis a. In nulla posuere sollicitudin aliquam.</p>
                        </div>
                        <div className="col-md-3">
                            <h5>On demand</h5>
                            <p>Nibh nisl condimentum id venenatis a. In nulla posuere sollicitudin aliquam. Et egestas quis ipsum suspendisse ultrices gravida.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;