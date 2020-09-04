import React from "react";
import headerImg from "./assets/pattern-bg.png";
import "./App.css";
import axios from "axios";

function App() {
  const api_key = "at_wOqGYbIdswsSjQiu9FcX7QL6VDxFx";
  axios({
    method: "get",
    url:
      "https://geo.ipify.org/api/v1?apiKey=at_wOqGYbIdswsSjQiu9FcX7QL6VDxFx&ipAddress=8.8.8.8",
    data: { apiKey: api_key },
    headers: {
      "Content-Type": "application/json",
    },
  }).then(function (response) {
    console.log(response.data.message);
  });
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
        <p>192.212.174.101</p>
        <h4>Location</h4>
        <p>Brooklyn, NY 10001</p>
        <h4>Timezone</h4>
        <p>UTC-5:00</p>
        <h4>ISP</h4>
        <p>SpaceX Starlink</p>
      </div>
    </div>
  );
}

export default App;
