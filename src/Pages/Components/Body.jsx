import React from 'react';
import img from '../../assets/banner2.png'

const Body = () => {
    return (
        <div>
            <div>
                <div className='flex mt-4  mx-auto mb-10 lg:px-20 lg:ml-10  grid grid-cols-1 lg:grid-cols-2 gap-0  '>

                    <div className='mt-2 lg:mt-0  px-5 lg:px-0 pl-10 lg:pl-0 lg:pl-24 mb-6 lg:mb-0 mt-5 lg:mb-0'>
                        <img className='' src={img} alt="" />
                    </div>

                    <div className='my-auto	 px-6 lg:px-0 mx-auto w-72 lg:w-full '>
                        <h2 className='text-3xl zyy mb-10 font-bold	mb-4 '>Sick Kid? How to Deal with <br /> a  Child’s Fever: 4 Steps</h2>
                        <p className='mb-4'>  Cras sit sed nec a nunc</p>
                        <p className='mb-4'>  Cras sit sed nec a nunc</p>
                        <p className='mb-4'>  Cras sit sed nec a nunc</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;