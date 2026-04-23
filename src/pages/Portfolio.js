import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import "../App.css";

import img2 from "../assets/Projects/building 00.png";
import img1 from "../assets/Projects/building 02.png";
import img3 from "../assets/Projects/building 01.png";
import img4 from "../assets/Projects/1.png";
import img5 from "../assets/Projects/3.png";
import img6 from "../assets/Projects/building 03.png";
import img7 from "../assets/Projects/22.jpeg";
import img8 from "../assets/Projects/13.jpeg";
import img9 from "../assets/Projects/12.jpeg";
import img10 from "../assets/Projects/7.jpeg";
import img11 from "../assets/Projects/9.png";

export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  const projects = [
    { title: "building Design", image: img1 },
    { title: "building Design", image: img2 },
    { title: "Design", image: img3 },
    { title: "Design", image: img4 },
    { title: "Design", image: img5 },
    { title: "Design", image: img6 },
    { title: "Design", image: img7 },
    { title: "Design", image: img8 },
    { title: "Design", image: img9 },
    { title: "Design", image: img10 },
    { title: "Design", image: img11 },

  ];

  return (
    <div className="container portfolio-bg">
      <h1>Portfolio</h1>

      <div className="grid" style={{ marginTop: "30px" }}>
        {projects.map((p, i) => (
          <div key={i} onClick={() => setSelected(p)}>
            <ProjectCard {...p} />
          </div>
        ))}
      </div>

      {/* FULLSCREEN MODAL */}
      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-content">
            <img src={selected.image} alt={selected.title} />
            <h2>{selected.title}</h2>
          </div>
        </div>
      )}
    </div>
  );
}