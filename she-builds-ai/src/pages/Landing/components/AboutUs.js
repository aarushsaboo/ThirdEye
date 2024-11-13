import styles from "./AboutUs.module.css"

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.whiteBoxContainer}>
        <div className={styles.whiteBox}>
          <h1>STEP-1 </h1>
          <p>
            UPLOAD 5-10 IMAGES OF YOURS ALONG WITH YOUR SOCIAL MEDIA USERNAMES
          </p>
        </div>

        <div className={styles.whiteBox}>
          <h1>STEP-2 </h1>
          <p>
            WE’LL FLAG AND GIVE A REPORT ON IF ANY ONLINE HARRASMENT IF YOUR
            PHOTOS ARE POSTED ANYWHERE BY AN UNAUTHORIZED USER
          </p>
        </div>

        <div className={styles.whiteBox}>
          <h1>STEP-3 </h1>
          <p>
            CHECK AND TAKE DOWN PHOTOS/VIDEOS FROM ANY SITES USING OUR WEBSITE
          </p>
        </div>
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
