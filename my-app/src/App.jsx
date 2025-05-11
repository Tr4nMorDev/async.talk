import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => console.log("User data:", data))
      .catch((err) => console.error(err));
  }, []);
  return <h1>Test Nginx Gateway Routing</h1>;
}

export default App;
