import React from "react";

export default function Dashboard() {
  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ fontSize: "2rem", color: "#ff69b4" }}>Climate & Bloom Dashboard 📊</h2>
      <p style={{ marginTop: "10px" }}>
        Track monthly bloom changes, CO₂ impact, and climate data across the world.
      </p>

      <div style={{ marginTop: "30px" }}>
        <h3>🌸 Bloom Statistics</h3>
        <ul>
          <li>Japan (Tokyo) – Cherry Blossoms peak in March</li>
          <li>USA (New York) – Spring greens bloom in April</li>
          <li>India (Kerala) – Coconut bloom in June</li>
          <li>Australia (Sydney) – Flowering trees in September</li>
        </ul>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h3>🌍 Climate Insights</h3>
        <p>
          Studies show that bloom seasons are shifting earlier due to rising temperatures.  
          This dashboard helps track changes over time, using real climate datasets.
        </p>
      </div>
    </div>
  );
}
