// src/App.js
import React from 'react';
import CameraComponent from './components/CameraComponent';
import QuestionComponent from './components/QuestionComponent.js';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>English Speaking Practice</h1>
      </header>
      <main>
        <CameraComponent />
        <QuestionComponent />
      </main>
    </div>
  );
};

export default App;
