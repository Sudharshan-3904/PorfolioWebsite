import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="section cyber-section">
      <h2 className="section-title">Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit" className="glow-button">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
