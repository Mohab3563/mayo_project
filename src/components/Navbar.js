import { useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/image.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={img} alt="Mayo Studio" />
      </div>

      {/* Burger Icon */}
      <div className="burger" onClick={() => setOpen(!open)}>
        {open ? "✖" : "☰"}
      </div>

      {/* Links */}
      <div className={`nav-links ${open ? "active" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
        <Link to="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

        <Link to="/contact" className="btn" onClick={() => setOpen(false)}>
          Get Quote
        </Link>
      </div>
    </div>
  );
}