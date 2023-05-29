import React from 'react';
import img from '../../assets/banner3.png'

const Body2 = () => {
    return (
        <div>
            <div className='  mt-4 mb-5 lg:mb-12  grid grid-cols-1 lg:grid-cols-2 gap-0  lg:pr-28'>
                <div className='my-auto lg:pt-20 lg:pb-0  lg:ml-44  lg:h-full mx-auto w-80 lg:w-full lg:ml-58'>
                    <div className=''>
                        <div className=''>
                            <h2 className=' ml-5 lg:ml-10 text-3xl mx-auto  font-extrabold	mb-5'>Doctor’s Schedule Today</h2>
                        </div>

                        <div className='mt-3 flex mb-4 mx-auto px-2 lg:pl-14'>
                            <h1 className='px-1 my-auto text-red-500 font-semibold'>08:00</h1>
                            <div className=' ml-28 lg:ml-32'>
                                <h2 className='font-bold'>General Practitioner</h2><br />
                                <p>Dr. Robbert Algazali</p></div>
                        </div>
                        <hr />
                        <div className='mt-3 flex mb-4 mx-auto px-2 lg:pl-14'>
                            <h1 className='px-1 my-auto text-red-500 font-semibold'>08:00</h1>
                            <div className=' ml-28 lg:ml-32'>
                                <h2 className='font-bold'>General Practitioner</h2><br />
                                <p>Dr. Robbert Algazali</p></div>
                        </div>
                        <hr />
                        <div className='mt-3 flex mb-4 mx-auto px-2 lg:pl-14'>
                            <h1 className='px-1 my-auto text-red-500 font-semibold'>08:00</h1>
                            <div className=' ml-28 lg:ml-32'>
                                <h2 className='font-bold'>General Practitioner</h2><br />
                                <p>Dr. Robbert Algazali</p></div>
                        </div>
                        <hr />

                        <div className='mt-3 flex mb-4 mx-auto px-2 lg:pl-14'>
                            <h1 className='px-1 my-auto text-red-500 font-semibold'>08:00</h1>
                            <div className=' ml-28 lg:ml-32'>
                                <h2 className='font-bold'>General Practitioner</h2><br />
                                <p>Dr. Robbert Algazali</p></div>
                        </div>
                        <hr />

                        <div className='mt-3 flex mb-4 mx-auto px-2 lg:pl-14'>
                            <h1 className='px-1 my-auto text-red-500 font-semibold'>08:00</h1>
                            <div className=' ml-28 lg:ml-32'>
                                <h2 className='font-bold'>General Practitioner</h2><br />
                                <p>Dr. Robbert Algazali</p></div>
                        </div>
                        <hr />

                    </div>

                </div>



                <div className='lg:mt-0 '>
                    <img src={img} alt="" />
                </div>



            </div>
        </div>
    );
};

export default Body2;