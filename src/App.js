import React from "react";
import headerImg from "./assets/pattern-bg.png";
import "./App.css";

import InfoCard from "./InfoCard.js";
import SearchBar from "./SearchBar";

function App() {
  return (
    <div className="App">
      <img src={headerImg} alt="purple background" />
      <h1>IP Address Tracker</h1>
      <SearchBar />
      <InfoCard />
    </div>
  );
}

export default App;
