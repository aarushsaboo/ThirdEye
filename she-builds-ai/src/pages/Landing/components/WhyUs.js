import Card from './Card';
import styles from './WhyUs.module.css';

const WhyUs = () => {
  return (
    <div className={styles.whyUsContainer}>
      <div className={styles.whyUs}>
        <div className={styles.heading}>
          <h2>WHY US </h2>
        </div>
          <div className={styles.cardContainer}>
            <Card
              imgSrc={"/images/landing/person1-whyus.png"}
              text={"Secure Photo Vault with Multi-Layer Encryption"}
            />

            <Card
              imgSrc={"/images/landing/person2-whyus.png"}
              text={"Legal Support and Action Assistance"}
            />
            <Card
              imgSrc={"/images/landing/person3-whyus.png"}
              text={"Privacy-Preserving Authentication"}
            />
          </div>
      </div>
    </div>
  )
};

export default WhyUs;