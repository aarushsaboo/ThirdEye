import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.loginContainer}>
        <h1>TREND-TERRA</h1>
        <h2>GET YOUR LEGACY GOING SAFELY</h2>
        <div className={styles.buttonContainer}>
          <button className={styles.startJourney}>Start your journey</button>
          <button className={styles.login}>LOGIN</button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src="/images/landing/loudspeaker-hero.png"></img>
      </div>
    </div>
  )
}

export default Hero
