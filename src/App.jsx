import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Explore from "./pages/Explore";
import "./App.css";

export default function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <Router>
      <div className="app">
        {/* Navbar */}
        <nav
          className={`navbar ${showNavbar ? "visible" : ""}`}
          onMouseEnter={() => setShowNavbar(true)}
          onMouseLeave={() => setShowNavbar(false)}
        >
          <div className="logo">Bloom Tracker 🌸</div>
          <div className="links">
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>Dashboard</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
            <NavLink to="/explore" className={({ isActive }) => (isActive ? "active" : "")}>Explore</NavLink>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          © {new Date().getFullYear()} Bloom Tracker 🌍 | Built for Climate Awareness
        </footer>
      </div>
    </Router>
  );
}
