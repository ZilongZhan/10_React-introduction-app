import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);
  const name = "Zilong Zhan";

  return (
    <>
      <h1>{`Hello ${name}!`}</h1>
      <h2>You are so smart</h2>
    </>
  );
}

export default App;
