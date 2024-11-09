import styles from "./AboutUs.module.css"

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.whiteBoxContainer}>
        <div className={styles.whiteBox}></div>

        <div className={styles.whiteBox}></div>

        <div className={styles.whiteBox}></div>
      </div>
      <div className={styles.imageContainer}>
        <img src="/images/landing/person1-aboutus.png"></img>
        <img src="/images/landing/person2-aboutus.png"></img>

        <img src="/images/landing/person3-aboutus.png"></img>
      </div>
    </div>
  )
}

export default AboutUs
