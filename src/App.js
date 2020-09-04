import React from "react";
import headerImg from "./assets/pattern-bg.png";
import "./App.css";
import axios from "axios";

function App() {
  // axios({
  //   method: "get",
  //   url:
  //     "https://geo.ipify.org/service/account-balance?apiKey=at_wOqGYbIdswsSjQiu9FcX7QL6VDxFx",
  // }).then(function (response) {
  //   console.log(response);
  // });

  const test = (e) => {
    e.preventDefault();
    const baseUrl =
      "/service/account-balance?apiKey=at_wOqGYbIdswsSjQiu9FcX7QL6VDxFx";
    const axiosConfig = {
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    axios
      .get(baseUrl, axiosConfig)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        <button onClick={test}>test</button>
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
