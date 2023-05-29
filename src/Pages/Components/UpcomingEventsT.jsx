import React from 'react';
import img from '../../assets/bodyimg2.png'

const UpcomingEventsT = () => {
    return (
        <div>
            <div className='mb-8 mt-4 mx-20  lg:border lg:mb-12 gap-7  grid grid-cols-1 lg:grid-cols-2 lg:gap-20  lg:pr-28'>


                <div className='my-auto   lg:w-full lg:ml-20  '>
                    <h2 className='text-3xl mt-5 lg:mt-0 font-extrabold lg:mb-8'>How to lead a good healthy life</h2>
                    <p className='mb-6'>Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved. Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.</p>
                    <button className='btn px-3  lg:px-7 mr-3   bg-orange-500 border-0'>Book Now</button>
                    <button className='btn px-3 lg:px-7 bg-orange-500 border-0'>10 Available</button>
                </div>


                <div className='lg:mt-0  '>
                    <img className='lg:ml-28' src={img} alt="" />
                </div>

            </div>
        </div>
    );
};

export default UpcomingEventsT;