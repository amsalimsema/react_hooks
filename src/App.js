// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Home from "./Home";

function App() {
  const [color, setColor] = useState("red");
  console.log(color);

  return (
    <>
      <div className="App">
        <h2>Hooks</h2>
        <h1>My favorite color is {color}!</h1>
        <button type="button" onClick={() => setColor("blue")}>
          Blue
        </button>
        <button type="button" onClick={() => setColor("red")}>
          Red
        </button>
        <button type="button" onClick={() => setColor("pink")}>
          Pink
        </button>
        <h2>Using custom hook</h2>
        <Home />
      </div>
    </>
  );
}

export default App;
