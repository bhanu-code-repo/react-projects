import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
  };

  const reset = () => setCount(0);

  return (
    <div className="app">
      <div className="counter">
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <div className="buttons">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
