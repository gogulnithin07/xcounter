import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function handleInc(e) {
    setCount((c) => c + 1);
  }
  function handleDec(e) {
    setCount((c) => c - 1);
  }
  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={(e) => handleInc()}>Increment</button>
      <button
        onClick={(e) => {
          handleDec();
        }}>
        Decrement
      </button>
    </div>
  );
}

export default App;
