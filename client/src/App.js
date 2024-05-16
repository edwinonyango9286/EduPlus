import React, { useState } from 'react';
import MainMenu from './Components/MainMenu';
import EndGame from './Components/EndGame';
import Quiz from './Components/Quiz';
import CountDownTimer from './Components/CountDownTimer';
import QuizContext from './Helpers.js/Context';
import './App.css';


function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const hoursMinSecs = { hours: 0, minutes: 10, seconds: 60 };

  const resetQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="App">
      <h2>TAKE QUIZ</h2>
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && (
          <>
            <CountDownTimer hoursMinSecs={hoursMinSecs} />
            <Quiz />
          </>
        )}
        {gameState === "endgame" && <EndGame resetQuiz={resetQuiz} />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
