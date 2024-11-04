import styles from './Navbar.module.css'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
      <div className={styles.navbar}>
        <ul>
          <li className={styles.navLogo}>
            <Link to="/">TR-T</Link>
          </li>
        </ul>
      </div>
    )
}

export default Navbar