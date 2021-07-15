import React, { useState, useEffect } from "react";
import headerImg from "./assets/pattern-bg.png";
import "./App.scss";
import Axios from "axios";
import InfoCard from "./components/InfoCard";
import SearchBar from './components/SearchBar';
import { Map as MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

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

  const search = searchValue => {
    Axios.get(`${api_url}&domain=${searchValue}`)
      .then((res) => {
        const { ip, isp } = res.data;
        const { city, country, postalCode, timezone, lat, lng } = res.data.location;

        setIPData(() => {
          return {
            ip,
            city,
            country,
            postalCode,
            timezone,
            isp,
            lat,
            lng
          }
        })
      })
  }

  useEffect(() => {
    Axios.get(api_url).then((res) => {
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
          <SearchBar
            search={search}
            placeholder="Search for any IP address or domain"
          />
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

      <MapContainer center={[IPData.lat, IPData.lng]} zoom={16} className="map">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[IPData.lat, IPData.lng]}/>
      </MapContainer>
    </div>
  );
}

export default App;
