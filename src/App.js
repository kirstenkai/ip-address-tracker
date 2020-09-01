import React from "react";
import headerImg from "./assets/pattern-bg.png";
import "./App.css";

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
      <div>
        <h4>IP Address</h4>
        <h4>Location</h4>
        <h4>Timezone</h4>
        <h4>ISP</h4>
      </div>
    </div>
  );
}

export default App;
