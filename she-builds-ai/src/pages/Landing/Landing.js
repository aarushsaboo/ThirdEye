import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

import styles from './Landing.module.css'

const LandingPage = () => {
    return (
      <div className={styles.landing}>
        <Navbar />
      </div>
    )
};

export default LandingPage;