import { Link } from "react-router-dom";
import img from "../assets/image.png";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo" ><img src={img} alt="Mayo Studio" /></div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Link to="/contact" className="btn">Get Quote</Link>
    </div>
  );
}