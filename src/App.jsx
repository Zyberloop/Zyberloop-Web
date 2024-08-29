import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen bg-green-200 text-center flex items-center justify-center">
      This is Zyber Loop
    </div>
  );
}

export default App;
