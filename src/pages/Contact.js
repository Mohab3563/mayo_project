import "../App.css";
export default function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Email: mayostudioeg@gmail.com</p>
          <p>Phone: +200 01551292377</p>
          <p>Location: Cairo, Egypt</p>
        </div>

        <div className="contact-form">
          <h2>Send Message</h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="5"></textarea>
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
}