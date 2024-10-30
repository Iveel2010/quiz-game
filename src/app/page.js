"use client"
// components/Quiz.js
import { useState } from 'react';
import quizData from './quizData';
import styles from './components/Quiz.module.css';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);



  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };

  // components/Quiz.js
// ... (imports and state definitions remain the same)

const handleAnswerOptionClick = (option) => {
    const button = event.target;
    button.style.transform = "scale(0.95)";
    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 200);
  
    if (option === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  
  // ... (remaining code)
  
  return (

<body>
<div className={styles.container}>
     
     <div class="tooltip-container">
       <span class="tooltip">From Iveel</span>
       <span class="text">click me👆</span>
       <span>enjoy the game👋</span>
     </div>
     
           {showScore ? (
             <div>
               <h2 className={styles.score}>Your score: {score} / {quizData.length}</h2>
               <button className={styles.button} onClick={restartQuiz}>Restart Quiz</button>
             </div>
           ) : (
             <div>
               <h2 className={styles.question}>{quizData[currentQuestion].question}</h2>
               <div className={styles.options}>
                 {quizData[currentQuestion].options.map((option, index) => (
                   <button
                     key={index}
                     className={styles.button}
                     onClick={() => handleAnswerOptionClick(option)}
                   >
                     {option}
                   </button>
                 ))}
               </div>
             </div>
           )}
         </div>
</body>

  );
};

export default Quiz;
