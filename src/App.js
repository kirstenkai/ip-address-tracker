import React, { useState, useEffect } from "react";
import headerImg from "./assets/pattern-bg.png";
import "./App.scss";
import axios from "axios";

const api_url = "api/v1?apiKey=at_wOqGYbIdswsSjQiu9FcX7QL6VDxFx";

function App() {
  const [IPData, setIPData] = useState({
    ip: "",
    city: "",
    country: "",
    postalCode: "",
    timezone: "",
    isp: "",
  });

  useEffect(() => {
    axios.get(api_url).then((res) => {
      const { ip, isp } = res.data;
      const { city, country, postalCode, timezone } = res.data.location;

      setIPData((prev) => {
        return {
          ip,
          city,
          country,
          postalCode,
          timezone,
          isp,
        };
      });
    });
  }, []);

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
        <p>{IPData.ip}</p>
        <h4>Location</h4>
        <p>{`${IPData.city}, ${IPData.country} ${IPData.postalCode}`}</p>
        <h4>Timezone</h4>
        <p>{`UTC${IPData.timezone}`}</p>
        <h4>ISP</h4>
        <p>{IPData.isp}</p>
      </div>
    </div>
  );
}

export default App;
