import React from "react";
import headerImg from "./assets/pattern-bg.png";
import "./App.css";

import InfoCard from "./InfoCard.js";

function App() {
  return (
    <div className="App">
      <img src={headerImg} alt="purple background" />
      <h1>IP Address Tracker</h1>
      <input
        type="search"
        placeholder="Search for any IP address or domain"
      ></input>
      <button type="submit">></button>
      <InfoCard />
    </div>
  );
}

export default App;
