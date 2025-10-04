import React from "react";

export default function About() {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      <h2 style={{ fontSize: "2rem", color: "#ff69b4" }}>About Bloom Tracker 🌱</h2>
      <p style={{ marginTop: "20px" }}>
        Bloom Tracker is an interactive project that combines <b>global climate data</b> with  
        <b>seasonal bloom patterns</b>. It aims to raise awareness about how  
        <b>climate change</b> is affecting biodiversity and seasonal cycles.
      </p>

      <h3 style={{ marginTop: "30px" }}>✨ Goals</h3>
      <ul>
        <li>Educate people about climate-driven bloom shifts</li>
        <li>Make environmental data engaging and interactive</li>
        <li>Provide a global map for exploring seasonal blooms</li>
      </ul>

      <h3 style={{ marginTop: "30px" }}>🌍 Why it Matters</h3>
      <p>
        Changes in flowering times affect not just plants, but entire ecosystems—  
        from pollinators 🐝 to food crops 🌾. Tracking these changes is essential  
        for understanding our planet’s future.
      </p>
    </div>
  );
}
