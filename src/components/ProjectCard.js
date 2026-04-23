import "../App.css";
export default function ProjectCard({ title, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-overlay">
        <h3>{title}</h3>
      </div>
    </div>
  );
}
