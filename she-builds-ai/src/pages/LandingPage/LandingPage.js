import React from 'react';
import { Link } from "react-router-dom"

import styles from './LandingPage.module.css'

const LandingPage = () => {
    return (
      <div className={styles.landingPage}>
        <div className={styles.navbar}>
          <li className={styles.navLogo}>
            <Link to="/">TR-T</Link>
          </li>
        </div>
      </div>
    )
};

export default LandingPage;