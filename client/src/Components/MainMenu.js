import React, { useContext, useState } from "react";
import QuizContext from "../Helpers.js/Context";

const MainMenu = () => {
  const { setGameState } = useContext(QuizContext);
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
    setGameState("quiz");
  };

  return (
    <div className="menu">
      {!quizStarted && <button onClick={startQuiz}>START QUIZ</button>}
    </div>
  );
};

export default MainMenu;
