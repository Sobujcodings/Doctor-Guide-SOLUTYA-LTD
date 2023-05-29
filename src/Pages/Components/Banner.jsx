import React from 'react';
import img from '../../assets/Banner.png'

const Banner = () => {
    return (
        <div className='flex mt-4  lg:mb-12  grid grid-cols-1 lg:grid-cols-2 gap-0  lg:pr-28'>
            <div className='my-auto	 lg:ml-44 lg:w-full mx-auto w-80 lg:w-full lg:ml-58'>
                <h2 className='text-3xl font-extrabold	mb-4'>Find The Care <br /> You Need </h2>
                <p className='mb-4'>Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has been the <br /> industry's standard dummy text ever since the 1500s,</p>
                <button className='btn bg-orange-500 border-0 '>Make Appointment</button>
            </div>

            <div className='lg:mt-0'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;