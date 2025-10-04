import React from "react";

export default function Home() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#ff69b4" }}>Welcome to Bloom Tracker 🌸</h1>
      <p style={{ marginTop: "20px", fontSize: "1.2rem", maxWidth: "600px", margin: "20px auto" }}>
        Discover how seasonal flower blooms are shifting due to <b>climate change</b>.  
        🌍 Track flowering patterns across countries and explore how global warming is affecting biodiversity.
      </p>
      <img
        src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
        alt="Nature Bloom"
        style={{ width: "80%", maxWidth: "600px", borderRadius: "10px", marginTop: "30px" }}
      />
    </div>
  );
}
