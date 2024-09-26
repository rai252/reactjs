import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  // Correct state initialization
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);

      console.log("clicked", counter + 1);
    } else {
      console.log("value connot exceed 20 ")
    }
  };
  const removevalue = () => {
    if (counter > 0) {

      setCounter(counter - 1);
    } else {
      console.log("value connot exceed 0 ")
    }
  }

  return (
    <>
      <h1>Xira</h1>
      <h2>Counter values: {counter}</h2>

      {/* Change onclick to onClick */}
      <button onClick={addValue}>Add Value </button>

      <button onClick={removevalue}>Remove Value </button>
    </>
  );
}

export default App;
