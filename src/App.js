import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [keys, setKeys] = useState([]);
  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log(event);
      setKeys([...keys, event.key]);
    };
    window.addEventListener("keydown", handleKeyDown);
  }, [keys]);

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
