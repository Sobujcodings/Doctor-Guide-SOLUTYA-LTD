import React from 'react';

const About = () => {
    return (
        <div>
            <div className='border text-center card bg-slate-200 mb-14 py-4 lg:mx-20 mx-10 lg:px-40'>
                <div className='card border-0 w-lg-75 px-5 mx-auto '>
                    <h1 className='font-bold  text-2xl mb-3'>ABOUT US</h1>
                    <p className='fw-normal mb-5'>SOLUTYA is an organization of highly expert and talented people for experience the excellent standard that we cherish. Solutya comes with the promise of understanding the necessity and delivering it most satisfactorily.
                        <span className='hidden lg:block'>We provide each type of service in the IT sector, including web page development, E-commerce, virtual reality, augmented reality, software development, and mobile application development, digital marketing, and branding. Our goal is to help clients understand and make full use of digital technology to heighten</span>   brand awareness and lead to better business..
                    </p>
                </div>
                <button
                    className='btn mx-auto w-36 mb-2 bg-orange-500 mt-1'>LEARN MORE
                </button>

            </div>
        </div>
    );
};

export default About;