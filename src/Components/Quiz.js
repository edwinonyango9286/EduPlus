import React, { useState, useContext } from 'react';
import Questions from '../Helpers.js/QuestionBank';
import EndGame from './EndGame';
import QuizContext from '../Helpers.js/Context';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [gameState, setGameState] = useState("Quiz"); // 
  const { score, setScore } = useContext(QuizContext);

  const nextQuestion = () => {
    if (Questions[currentQuestion].Answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].Answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("EndGame"); 
  };

  if (gameState === "Quiz") {
    return (
      <div className='App'>
        <div className='quiz'>
          <h3>{Questions[currentQuestion].prompt}</h3>
          <button className='btn' onClick={() => setOptionChosen("A")}>
            {Questions[currentQuestion].OptionA}
          </button>
          <button className='btn' onClick={() => setOptionChosen("B")}>
            {Questions[currentQuestion].OptionB}
          </button>
          <button className='btn' onClick={() => setOptionChosen("C")}>
            {Questions[currentQuestion].OptionC}
          </button>
          <button className='btn' onClick={() => setOptionChosen("D")}>
            {Questions[currentQuestion].OptionD}
          </button>

          {currentQuestion === Questions.length - 1 ? (
            <button className='btn' onClick={finishQuiz}>
              Finish Quiz
            </button>
          ) : (
            <button className='btn' onClick={nextQuestion}>
              Next
            </button>
          )}
        </div>
      </div>
    );
  } else if (gameState === "EndGame") {
  
    return <EndGame />;
  }
};

export default Quiz;
