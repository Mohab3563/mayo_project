import "../App.css";

export default function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Info</h2>
          <div className="info-item">
            <p><strong>Email:</strong> mayostudioeg@gmail.com</p>
          </div>
          <div className="info-item">
            <p><strong>Phone:</strong> +20 01551292377</p>
          </div>
          <div className="info-item">
            <p><strong>Location:</strong> Cairo, Egypt</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Message</h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="5"></textarea>
          <button className="submit-btn">Send Message</button>
        </div>
      </div>
    </div>
  );
}