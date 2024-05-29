// src/components/QuestionComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuestionComponent = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://api.example.com/questions'); // Replace with your API endpoint
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {questions.length > 0 && <h2>{questions[currentQuestionIndex]}</h2>}
      <button onClick={handleNextQuestion} style={{ marginTop: '10px' }}>
        Next
      </button>
    </div>
  );
};

export default QuestionComponent;
