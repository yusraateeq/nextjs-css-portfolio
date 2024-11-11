import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div id='contact'>
      <form action="https://formspree.io/f/xrbzjoqa" target="_blank" method="post" id="contact">
        <div className="form" id="message">
          <div data-aos="fade-up" data-aos-duration="1800">
            <p>
              <span>Message</span> me
            </p>
            <div className="inputs">
              <input
                type="text"
                name="name"
                placeholder="Name"
                autoComplete="off"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <textarea
                name="message"
                rows="5"
                cols="70"
                placeholder="Message me..."
              ></textarea>

              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
