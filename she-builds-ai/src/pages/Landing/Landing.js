import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

import styles from './Landing.module.css'
import SvgContainer1 from './components/SvgContainer1';
import SvgContainer2 from './components/SvgContainer2';
import SvgContainer3 from './components/SvgContainer3';
import SvgContainer4 from './components/SvgContainer4';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyUs from './components/WhyUs';
import AboutUs from './components/AboutUs';
import SvgContainer5 from './components/SvgContainer5';

const LandingPage = () => {
    return (
      <div className={styles.landing}>
        <Navbar />
        <SvgContainer1 />
        <Hero />
        <SvgContainer2 />
        <Features />
        <SvgContainer3 />
        <WhyUs />
        <SvgContainer4 />
        <AboutUs />
        <SvgContainer5 />
      </div>
    )
};

export default LandingPage;