// components/Scoreboard.js
import styles from './Scoreboard.module.css';

const Scoreboard = ({ score, totalQuestions }) => {
  return (
    <div className={styles.scoreboard}>
      <h3>Score: {score}/{totalQuestions}</h3>
    </div>
  );
};

export default Scoreboard;
