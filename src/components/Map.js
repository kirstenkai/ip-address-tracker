import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "./Map.scss";

// function initializeMap() {
// const container = L.DomUtil.get('map');
// if(container != null){
// container._leaflet_id = null;
// }
// }

function Map({ markerPosition, lat, lng }) {
  const mapRef = useRef(null);
  // const position = [49.26636, -122.95263]
  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [49.26636, -122.95263],
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
