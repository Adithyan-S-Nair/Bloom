import React, { useEffect, useState } from "react";
import Select from "react-select";
import { feature } from "topojson-client";
import worldData from "world-atlas/countries-110m.json";
import GlobeBloom from "../components/GlobeBloom";

function getCentroid(geometry) {
  let lat = 0,
    lng = 0,
    count = 0;

  if (geometry.type === "Polygon") {
    geometry.coordinates[0].forEach(([x, y]) => {
      lng += x;
      lat += y;
      count++;
    });
  } else if (geometry.type === "MultiPolygon") {
    geometry.coordinates.forEach((poly) =>
      poly[0].forEach(([x, y]) => {
        lng += x;
        lat += y;
        count++;
      })
    );
  }
  return { lat: lat / count, lng: lng / count };
}

export default function Explore() {
  const [month, setMonth] = useState(3);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedLayer, setSelectedLayer] = useState("default");

  const bloomsData = [
    { lat: 35.68, lng: 139.76, label: "Tokyo - Cherry Blossoms", month: 3 },
    { lat: 40.71, lng: -74.01, label: "New York - Spring Greens", month: 4 },
    { lat: 10.0, lng: 76.2, label: "Kerala - Coconut Bloom", month: 6 },
    { lat: -33.87, lng: 151.21, label: "Sydney - Flowering Trees", month: 9 },
  ];

  useEffect(() => {
    const countryFeatures = feature(worldData, worldData.objects.countries).features;
    setCountries(
      countryFeatures.map((c) => ({
        label: c.properties.name,
        value: c.id,
        centroid: getCentroid(c.geometry),
        geometry: c.geometry,
      }))
    );
  }, []);

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        marginTop: "60px", // space for navbar
        overflow: "hidden",
      }}
    >
      {/* Controls Box */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          zIndex: 2100,
          background: "rgba(255,255,255,0.95)",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        {/* Month Slider */}
        <div style={{ marginBottom: "10px" }}>
          <label>Month: {month}</label>
          <input
            type="range"
            min="1"
            max="12"
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
          />
        </div>

        {/* Country Selector */}
        <div style={{ marginBottom: "10px" }}>
          <Select
            options={countries}
            placeholder="Select a country..."
            onChange={setSelectedCountry}
          />
        </div>

        {/* Layer Selector */}
        <div>
          <label>
            <input
              type="radio"
              name="layer"
              value="default"
              checked={selectedLayer === "default"}
              onChange={(e) => setSelectedLayer(e.target.value)}
            />{" "}
            Default
          </label>
          <label style={{ marginLeft: "10px" }}>
            <input
              type="radio"
              name="layer"
              value="RADARSAT"
              checked={selectedLayer === "RADARSAT"}
              onChange={(e) => setSelectedLayer(e.target.value)}
            />{" "}
            RADARSAT
          </label>
          <label style={{ marginLeft: "10px" }}>
            <input
              type="radio"
              name="layer"
              value="INPE"
              checked={selectedLayer === "INPE"}
              onChange={(e) => setSelectedLayer(e.target.value)}
            />{" "}
            INPE
          </label>
          <label style={{ marginLeft: "10px" }}>
            <input
              type="radio"
              name="layer"
              value="NASA"
              checked={selectedLayer === "NASA"}
              onChange={(e) => setSelectedLayer(e.target.value)}
            />{" "}
            NASA
          </label>
        </div>
      </div>

      {/* Globe */}
      <GlobeBloom
        month={month}
        selectedCountry={selectedCountry}
        bloomsData={bloomsData}
        selectedLayer={selectedLayer}
      />
    </div>
  );
}
