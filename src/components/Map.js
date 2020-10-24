import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "./Map.scss";

function Map({ markerPosition, lat, lng }) {
  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [49.26636, -122.95263
      ],
      zoom: 16,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }),
      ],
    });
  }, []);

  const markerRef = useRef(null);
  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.setLatLng(markerPosition);
    } else {
      markerRef.current = L.marker(markerPosition).addTo(mapRef.current);
    }
  }, [markerPosition]);

  return <div id="map"></div>;
}

export default Map;
