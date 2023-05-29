import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Body from '../Components/body';
import Body2 from '../Components/Body2';
import MedicalCare from '../Components/MedicalCare';
import ImageGrad from '../Components/ImageGrad';
import MedicalExpert from '../Components/MedicalExpert';
import Slider from '../Components/Slider';
import UpcomingEvents from '../Components/UpcomingEvents';
import UpcomingEventsT from '../Components/UpcomingEventsT';
import Footer from '../Components/Footer';
import About from '../Components/About';

const Home = () => {
    return (
        <div className='w-auto'>
            <Navbar></Navbar>
            <Banner></Banner>
            <Body></Body>
            <Body2></Body2>
            <MedicalCare></MedicalCare>
            {/* <ImageGrad></ImageGrad> */}
            {/* <MedicalExpert></MedicalExpert> */}
            <Slider></Slider>
            <UpcomingEvents></UpcomingEvents>
            <UpcomingEventsT></UpcomingEventsT>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;