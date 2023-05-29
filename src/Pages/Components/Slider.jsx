import React from 'react';
import '../Components/slider.css'
import img from '../../assets/doctor.jpg'


const Slider = () => {
    return (
        <div>

            <div className="mx-20 mb-20  lg:p-2  ">
                <div className="carousel w-full h-40 lg:h-full card bg-gradient-to-r from-sky-600 to-indigo-500">
                
                    <div className="carousel w-full h-40 lg:h-64 BGIMG ">
                        <div id="slide1" className=" carousel-item w-72 relative mt-2 ml-2 lg:ml-0 lg:mt-3 lg:w-full   ">
                            <div>
                                <img className='lg:ml-64 lg:w-52 w-16 p-1 lg:p-0 mt-0 lg:mt-2 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1JRNbMkE2UjIt0qRblEG-DkY_brvmUOy_rg&usqp=CAU" alt="" />
                            </div>

                            <div className='lg:w-64  text-black lg:ml-10 w-64'>
                                <h1 className='lg:text-3xl font-bold lg:mb-2'>Patient Feedback</h1>
                                <h2 className='lg:mb-2'>Lorem ih2sum dolors  <span className='hidden lg:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>.</h2>
                                <p className='hidden lg:block font-semibold'>TOM COOPPER <br />
                                    <span className='font-bold'>Managing Director Or Art</span>
                                </p>
                            </div>

                            <div className="absolute flex justify-between sm:transform-translate-y-1/2 lg:left-5 lg:right-5 left-14 top-2/4">
                                <a href="#slide4" className="btn btn-circle ">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        

                        <div id="slide2" className=" carousel-item w-72 relative mt-2 ml-2 lg:ml-0 lg:mt-3 lg:w-full   ">
                            <div>
                                <img className='lg:ml-64 lg:w-52 w-16 p-1 lg:p-0 mt-0 lg:mt-2 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1JRNbMkE2UjIt0qRblEG-DkY_brvmUOy_rg&usqp=CAU" alt="" />
                            </div>

                            <div className='lg:w-64  text-black lg:ml-10 w-64'>
                                <h1 className='lg:text-3xl font-bold lg:mb-2'>Patient Feedback</h1>
                                <h2 className='lg:mb-2'>Lorem ih2sum dolors  <span className='hidden lg:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>.</h2>
                                <p className='hidden lg:block'>TOM COOPPER <br />
                                    <span className='font-semibold'>Managing Director Or Art</span>
                                </p>
                            </div>

                            <div className="absolute flex justify-between sm:transform-translate-y-1/2 lg:left-5 lg:right-5 left-14 top-2/4">
                                <a href="#slide1" className="btn btn-circle ">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide3" className=" carousel-item w-72 relative mt-2 ml-2 lg:ml-0 lg:mt-3 lg:w-full   ">
                            <div>
                                <img className='lg:ml-64 lg:w-52 w-16 p-1 lg:p-0 mt-0 lg:mt-2 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1JRNbMkE2UjIt0qRblEG-DkY_brvmUOy_rg&usqp=CAU" alt="" />
                            </div>

                            <div className='lg:w-64  text-black lg:ml-10 w-64'>
                                <h1 className='lg:text-3xl font-bold lg:mb-2'>Patient Feedback</h1>
                                <h2 className='lg:mb-2'>Lorem ih2sum dolors  <span className='hidden lg:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>.</h2>
                                <p className='hidden lg:block'>TOM COOPPER <br />
                                    <span className='font-semibold'>Managing Director Or Art</span>
                                </p>
                            </div>

                            <div className="absolute flex justify-between sm:transform-translate-y-1/2 lg:left-5 lg:right-5 left-14 top-2/4">
                                <a href="#slide2" className="btn btn-circle ">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>

               



                







            </div>






        </div>
    );
};

export default Slider;