import React, { useState } from "react";
import QuestionScreen from "./QuestionScreen";
import ScoreScreen from "./ScoreScreen";

const questions = [
  { id: 1, question: "Is this quiz for Radiantly", options: ["Yes", "No"], answer: "Yes" },
  { id: 2, question: "This Internship", options: ["Python", "React", "C++", "Java"], answer: "React" },
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
    setQuizStarted(false);
  };

  return (
    <div>
      {!quizStarted ? (
       <div
       className="app-container"
       style={{
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'center',
         height: '100vh',
         textAlign: 'center',
         backgroundColor: '#f5f5f5',
       }}
     >
       <h1>Welcome to the Quiz!</h1>
       <button
         className="button"
         style={{
           padding: '10px 20px',
           fontSize: '16px',
           cursor: 'pointer',
           backgroundColor: '#4CAF50',
           color: 'white',
           border: 'none',
           borderRadius: '5px',
           marginTop: '20px',
         }}
         onClick={() => setQuizStarted(true)}
       >
         Start Quiz
       </button>
     </div>
     
      ) : showScore ? (
        <ScoreScreen
          score={score}
          totalQuestions={questions.length}
          restartQuiz={restartQuiz}
        />
      ) : (
        <QuestionScreen
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default App;
