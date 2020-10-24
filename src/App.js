import React, { useState, useEffect } from "react";
import headerImg from "./assets/pattern-bg.png";
import "./App.scss";
import axios from "axios";
import Map from "./components/Map";
import InfoCard from "./components/InfoCard";
import SearchBar from './components/SearchBar'

const api_url = "api/v1?apiKey=at_wOqGYbIdswsSjQiu9FcX7QL6VDxFx";

function App() {
  const [IPData, setIPData] = useState({
    ip: "",
    city: "",
    country: "",
    postalCode: "",
    timezone: "",
    isp: "",
    lat: "",
    lng: "" 
  });

  useEffect(() => {
    axios.get(api_url).then((res) => {
      const { ip, isp } = res.data;
      const { city, country, postalCode, timezone, lat, lng } = res.data.location;

      setIPData((prev) => {
        return {
          ip,
          city,
          country,
          postalCode,
          timezone,
          isp,
          lat,
          lng
        };
      });
    });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <img src={headerImg} alt="purple background" />
        <div className="header">
          <h1>IP Address Tracker</h1>
          <SearchBar />
        </div>
      </div>
      <InfoCard 
        ip={IPData.ip}
        city={IPData.city}
        country={IPData.country}
        postalCode={IPData.postalCode}
        timezone={IPData.timezone}
        isp={IPData.isp}
      />

      <Map 
        className="leaflet-container" 
        markerPosition={[IPData.lat, IPData.lng]}
        lat={IPData.lat}
        lng={IPData.lng}
      />
    </div>
  );
}

export default App;
