import React, { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";

export default function GlobeBloom({
  month,
  selectedCountry,
  bloomsData,
  selectedLayer, // "default" | "RADARSAT" | "INPE" | "NASA"
}) {
  const globeEl = useRef();
  const [pulsing, setPulsing] = useState(true);

  const blooms = bloomsData.filter((b) => b.month === month);

  // Pulsing animation for bloom points
  useEffect(() => {
    let frame;
    const animate = () => {
      setPulsing((p) => !p);
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  // Zoom to selected country
  useEffect(() => {
    if (!selectedCountry || !globeEl.current) return;
    const { lat, lng } = selectedCountry.centroid;
    globeEl.current.pointOfView({ lat, lng, altitude: 1.2 }, 2000);
  }, [selectedCountry]);

  // Choose globe texture based on selected layer
  const globeTextures = {
    default: "https://unpkg.com/three-globe/example/img/earth-night.jpg",
    RADARSAT: "/assets/radarsat_tiles.png", // preprocessed tiles or PNG
    INPE: "/assets/inpe_tiles.png",
    NASA: "/assets/nasa_tiles.png",
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Globe
        ref={globeEl}
        globeImageUrl={globeTextures[selectedLayer || "default"]}
        bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

        // Blooms points
        pointsData={blooms}
        pointLat="lat"
        pointLng="lng"
        pointColor={() => "#ff69b4"}
        pointAltitude={() => (pulsing ? 0.01 : 0.02)}
        pointRadius={0.5}
        pointLabel={(d) => d.label}

        // Selected country polygon highlight
        polygonsData={selectedCountry ? [selectedCountry] : []}
        polygonCapColor={() => "#FFA500"}
        polygonSideColor={() => "rgba(0,0,0,0.1)"}
        polygonStrokeColor={() => "#000"}
        polygonAltitude={() => 0.03}
        polygonLabel={(c) => c.label}
        polygonsTransitionDuration={300}
      />
    </div>
  );
}
