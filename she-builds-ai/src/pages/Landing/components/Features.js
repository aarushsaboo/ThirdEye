import styles from './Features.module.css';

const Features = () => {
  return (
    <div className={styles.features}>
      <div className={styles.imageContainer}>
        <img src="images/landing/heart-features.png"></img>
      </div>
      <div className={styles.featureContainer}>
        <div className={styles.feature}>
          <h3>AI-DRIVEN CONTENT MODERATION</h3>
          <p>
            Utilize advanced machine learning algorithms to automatically filter
            and flag harmful messages comments, and screenshots, ensuring a
            safer online environment for women influencers.
          </p>
        </div>
        <div className={styles.feature}>
          <h3>PROACTIVE THREAT DETECTION & USER BLOCKING</h3>
          <p>
            Implement sophisticated algorithms that analyze behavioral patterns
            to identify and block suspicious or malicious users, including those
            using fake profiles for harassment or stalking.
          </p>
        </div>
        <div className={styles.feature}>
          <h3>PREDICTIVE ANALYTICS & ALERT SYSTEMS</h3>
          <p>
            Deploy predictive models that monitor engagement trends and detect
            unusual activity spikes, triggering real-time alerts for influencers
            and their security teams to address potential threats promptly.
          </p>
        </div>
      </div>
    </div>
  )
};

export default Features;