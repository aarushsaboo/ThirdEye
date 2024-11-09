import styles from './Card.module.css';

const Card = ({imgSrc, text}) => {
  return (
      <div className={styles.card}>
        <img src={imgSrc}></img>
        <div className={styles.cardTextContainer}>
              <h2>{text}</h2>
        </div>
      </div>
  )
};

export default Card;