import React from 'react';
import '../Components/slider.css'

const Slider = () => {
    return (
        <div>

            <div className="mx-20 mb-20  p-2  ">
                <div className="carousel w-full card bg-gradient-to-r from-sky-600 to-indigo-500">
                    <div className="carousel w-full h-36 lg:h-64 BGIMG   ">


                        <div id="slide1" className="carousel-item  relative my-auto w-full ">
                            <div>
                                <img className='ml-32 w-52 rounded-full ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1JRNbMkE2UjIt0qRblEG-DkY_brvmUOy_rg&usqp=CAU" alt="" />
                            </div>

                            <div className='w-64  text-black ml-10 my-auto'>
                                <h1 className='text-3xl font-bold mb-5'>Patient Feedback</h1>
                                <h2 className='mb-5'>Lorem ih2sum dolors po, aliquet nulla aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                                <p>TOM COOPPER <br />
                                    Managing Director Or Art</p>
                            </div>

                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle ">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>



                        <div id="slide2" className="carousel-item  relative my-auto w-full ">
                            <div>
                                <img className='ml-32 w-52 rounded-full ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1JRNbMkE2UjIt0qRblEG-DkY_brvmUOy_rg&usqp=CAU" alt="" />
                            </div>

                            <div className='w-64  text-black ml-10 my-auto'>
                                <h1 className='text-3xl font-bold mb-5'>Patient Feedback</h1>
                                <h2 className='mb-5'>Lorem ih2sum dolors po, aliquet nulla aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                                <p>TOM COOPPER <br />
                                    Managing Director Or Art</p>
                            </div>


                            {/* <img className="w-full " src="https://thumbs.dreamstime.com/b/doctor-holding-stethoscope-young-female-doctor-holding-stethoscope-her-hands-standing-hospital-room-138764613.jpg"  /> */}
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle ">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                        <div id="slide3" className="carousel-item  relative my-auto w-full ">
                            <div>
                                <img className='ml-32 w-52 rounded-full ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1JRNbMkE2UjIt0qRblEG-DkY_brvmUOy_rg&usqp=CAU" alt="" />
                            </div>

                            <div className='w-64  text-black ml-10 my-auto'>
                                <h1 className='text-3xl font-bold mb-5'>Patient Feedback</h1>
                                <h2 className='mb-5'>Lorem ih2sum dolors po, aliquet nulla aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                                <p>TOM COOPPER <br />
                                    Managing Director Or Art</p>
                            </div>

                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle ">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>








                        {/* 
                        <div id="slide2" className="carousel-item relative w-full">
                            <img className="w-full " src="https://thumbs.dreamstime.com/b/doctor-holding-stethoscope-young-female-doctor-holding-stethoscope-her-hands-standing-hospital-room-138764613.jpg"  />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img className="w-full " src="https://thumbs.dreamstime.com/b/doctor-holding-stethoscope-young-female-doctor-holding-stethoscope-her-hands-standing-hospital-room-138764613.jpg"  />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div> */}

                    </div>
                </div>

            </div>





            {/* <div className="mx-20 mb-10  h-full ">
                <div className="carousel  h-96 card ">
                    <div id="slide1" className="carousel-item ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDEPcVvnbtMTzsfIHqwuxIAJDft7ibb7mpA&usqp=CAU" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8LxW9Q6HbK8N70vkrWZ983EADkHPcCQjvA&usqp=CAU" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                   
                </div> */}
            {/* </div> */}
        </div>
    );
};

export default Slider;