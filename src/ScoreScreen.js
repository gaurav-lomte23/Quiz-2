import React from "react";

const ScoreScreen = ({ score, totalQuestions, restartQuiz }) => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Quiz Completed!</h1>
      <p>
        You scored {score} out of {totalQuestions}
      </p>
      <button onClick={restartQuiz} style={{ padding: "10px 20px", cursor: "pointer" }}>
        Restart Quiz
      </button>
    </div>
  );
};

export default ScoreScreen;
