import styles from './Navbar.module.css'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
      <div className={styles.navbar}>
        <ul>
          <li className={styles.navHeading1}>
            <Link to="/" style={{ textDecoration: "none" }}>
              TR-T
            </Link>
          </li>
          <div className={styles.flexContainer}>
            <li className={styles.home}>
              <Link to="/" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li className={styles.about}>
              <Link to="/" style={{ textDecoration: "none" }}>
                About Us
              </Link>
            </li>
            <li className={styles.contact}>
              <Link to="/" style={{ textDecoration: "none" }}>
                Contact Us
              </Link>
            </li>
            <li className={styles.services}>
              <Link to="/" style={{ textDecoration: "none" }}>
                Our Services
              </Link>
            </li>
            <button className={styles.login} href="/">
                LOGIN
            </button>
          </div>
        </ul>
      </div>
    )
}

export default Navbar