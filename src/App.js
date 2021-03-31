import "./App.css";
import { useState } from "react";

function App() {
  const [keys, setKeys] = useState([]);
  const handleKeyDown = (event) => {
    console.log(event);
    setKeys([...keys, event.key]);
  };
  window.addEventListener("keydown", handleKeyDown);
  return (
    <div className="App">
      <ul>
        {keys.map((key, index) => (
          <li key={index}>{key}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
