import { useState } from "react";
function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  return (
    <div className="app">
      <h1>25 + 5 Clock App</h1>
      <div className="inputContainer">
        <div>
          <p id="break-label" className="label">Break Length</p>
          <div className="inputControl">
            <button id='break-increment' onClick={() => setBreakLength(prev => prev + 1)}>&#8593;</button>
            <p id="break-length">{breakLength}</p>
            <button id="break-decrement" onClick={() => setBreakLength(prev => prev - 1)}>&#8595;</button>
          </div>
        </div>
        <div>
          <p id='session-label' className="label">Session Length</p>
          <div className="inputControl">
            <button id='session-increment' onClick={() => setSessionLength(prev => prev + 1)}>&#8593;</button>
            <p id="session-length">{sessionLength}</p>
            <button id='session-decrement' onClick={() => setSessionLength(prev => prev - 1)}>&#8595;</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App;