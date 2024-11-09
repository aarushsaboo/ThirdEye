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
      </div>
    )
};

export default LandingPage;