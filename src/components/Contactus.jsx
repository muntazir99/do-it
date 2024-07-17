import React, { useState } from "react";
import "./Contactus.css"; // Assuming you will create a CSS file for styles
import call from "../assets/call.png";
import linkedin from "../assets/linkedin.png";
import mail from "../assets/mail.png";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // Handle form submission logic
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <p className="descirption">
        Ready to discuss your upcoming event? Contact us today to schedule a
        consultation and let us bring your vision to life with creativity,
        passion, and precision.
      </p>
      <div className="contact-content">
        <div className="contact-info">
          <p>
            <img classname="badlo" src={call} alt="" />
            <p>+44 7404971067</p>
          </p>
          <p>
            <img src={linkedin} alt="" />
            <a href="https://www.linkedin.com/in/sai-saketh-karre-b6a221270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              Connect
            </a>
          </p>
          <p>
            <img src={mail} alt="" />
            <p>Doitnoweventsltd@gmail.com </p>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <div className="form-gp">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="form-fa"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="form-la"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <button type="submit" className="form-button">
            Send ➔
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
