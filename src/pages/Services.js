import "../App.css";
export default function Services() {
  const services = ["Architecture Design", "Interior Design", "3D Visualization", "Consulting"];

  return (
    <div className="container">
      <h1>Our Services</h1>
      <div className="grid" style={{ marginTop: "30px" }}>
        {services.map((s, i) => (
          <div key={i} className="service-box">
            <h3>{s}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}