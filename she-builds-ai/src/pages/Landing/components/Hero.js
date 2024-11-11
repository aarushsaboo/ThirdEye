import styles from "./Hero.module.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate('/login'); 
  };
  return (
    <div className={styles.hero}>
      <div className={styles.loginContainer}>
        <h1>TREND-TERRA</h1>
        <h2>GET YOUR LEGACY GOING SAFELY</h2>
        <div className={styles.buttonContainer}>
          <button className={styles.startJourney}>Start your journey</button>
          <button className={styles.login} onClick={handleLoginClick}>LOGIN</button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src="/images/landing/loudspeaker-hero.png" alt="hero-section-img"></img>
      </div>
    </div>
  )
}

export default Hero
