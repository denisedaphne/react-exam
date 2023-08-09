import React, { useState } from "react";
import './App.css';

function Hello() {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    setDisplayText(inputText);
  };

  return (
    <div>
      <p>Enter your name: {displayText}</p>
      <input
        type="text"
        placeholder="your name"
        value={inputText}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Submit</button>
    </div>
  );
}

const Cars = () => {
  const cars = ['Ford', 'BMW', 'Audi'];

  return (
    <div>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>I am a {car}</li>
        ))}
      </ul>
    </div>
  );
};



function App() {
  return (
    <div>
      <Hello />
      <Cars />
    </div>
  );
}

export default App;