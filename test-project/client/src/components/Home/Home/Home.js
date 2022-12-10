import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navber from '../../Shared/Navber/Navber';
import Contact from '../Contact/Contact';
import Features from '../Features/Features';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div >
            <Navber></Navber>
            <Header></Header>
            <Features></Features>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;