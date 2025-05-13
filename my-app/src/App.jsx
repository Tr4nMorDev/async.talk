import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:8000/user/hello")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => setMessage("Error: " + err.message));
  }, []);

  return (
    <div>
      <h1>Kết nối tới Kong Gateway</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
