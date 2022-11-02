import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'


const About = () => {
    return (
        <div>
            <div className="hero my-20">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2 relative'>
                    <img src={person} alt='' className=" rounded-lg shadow-2xl h-full w-4/5" />
                    <img src={parts} alt='' className=" rounded-lg shadow-2xl absolute top-1/2 right-5 w-3/5 border-8 " />
                    </div>
                    <div className='w-1/2 mt-20'>
                        <p className="  text-2xl font-bold text-orange-600">About Us</p>
                        <h1 className="text-5xl my-5 font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="btn btn-info">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;