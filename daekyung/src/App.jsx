import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LandingPage from "./pages/LandingPage";

// function App() {
//   return (
//     <div className="font-sans">
//       <h1>Daekyung Printing Website</h1>
//       <p>웹사이트 구현 중</p>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
