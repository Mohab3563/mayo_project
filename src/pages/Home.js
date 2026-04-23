import "../App.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <h1>Designing Spaces That Inspire</h1>
        <p>Modern architecture solutions with creativity</p>
        <br />
        <Link to="/portfolio" className="btn">View Projects</Link>
      </div>
    </div>
  );
}
