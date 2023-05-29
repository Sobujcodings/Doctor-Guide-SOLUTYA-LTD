import React from 'react';
import img from '../../assets/bodyimg.png'

const UpcomingEvents = () => {
    return (


        <div className='flex mt-4 mx-20 mb-10 lg:mb-20 lg:border   grid grid-cols-1 lg:grid-cols-2 gap-0  lg:pr-28'>

            <div className='lg:mt-0'>
                <img src={img} alt="" />
            </div>



            <div className='my-auto mx-auto  w-56 lg:w-full lg:ml-20 '>
                <h2 className='text-3xl mt-5 lg:mt-0 font-extrabold	mb-8 '>How to lead a good healthy life</h2>
                <p className='mb-6'>Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved. Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.</p>
                <button className='btn px-3 lg:px-7 mr-3  bg-orange-500 border-0'>Book Now</button>
                <button className='btn px-3 lg:px-7 bg-orange-500 border-0'>10 Available</button>
            </div>

        </div>






    );
};

export default UpcomingEvents;