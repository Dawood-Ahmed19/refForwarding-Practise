import React, { useRef } from "react";
import "./App.css";
import User from "./User.jsx";

function App() {
  let myRef = useRef(null);
  function updateInput() {
    myRef.current.value = "Dawood Ahmed";
  }

  return (
    <>
      <div className="App">
        <h1>learning Forwarding in React js</h1>
        <User ref={myRef} />
        <button onClick={updateInput} type="submit">
          Submit
        </button>
      </div>
    </>
  );
}

export default App;
