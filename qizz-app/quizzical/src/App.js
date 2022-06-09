import React, { useState } from "react";
import Start from "./components/Start";
import QuizComponent from "./components/QuizComponent";
function App() {
  const [isQuizStarted, setQuizStarted] = useState(false);


  function toggleStartQuiz() {
    console.log("started quiz")
    setQuizStarted(true);
  }
  function endQuiz() {
    console.log("ending quizz")
    setQuizStarted(false);
  }
  return (
    <div className="bg">
      {!isQuizStarted && <Start startQuizz={() => toggleStartQuiz}/>}
      {isQuizStarted && <QuizComponent isQuizStarted={isQuizStarted} endQuiz={() => endQuiz} />}
    </div>
  );
}

export default App;
