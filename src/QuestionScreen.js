import React from "react";

const QuestionScreen = ({ question, options, handleAnswer }) => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>{question}</h2>
      <div>
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            style={{
              margin: "10px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionScreen;
