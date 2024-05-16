import React, { useContext } from 'react';
import Questions from '../Helpers.js/QuestionBank';
import QuizContext from '../Helpers.js/Context';

const EndGame = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className='App'>
      <div className='quiz'>
        <h1>FINISHED</h1>
        <h1> SCORE {score}/{Questions.length}</h1>
        <button className='btnn' onClick={restartQuiz}>RETAKE QUIZ</button>
      </div>
    </div>
  );
};

export default EndGame;
