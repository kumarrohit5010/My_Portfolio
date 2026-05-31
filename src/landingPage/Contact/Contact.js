import React from "react";

function Contact() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="serviceHeading  mt-5">
            Contact <span>Me</span>
          </h1>
          <section className="contact-container">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="contact-left"
            >
              <div className="contact-left-title">
                <p className="contact-kicker">Let&apos;s talk</p>
                <h2>Get In Touch</h2>
                <hr />
                <p className="contact-description">
                  Have a project in mind, a role to discuss, or just want to
                  connect? Send a message and I&apos;ll get back soon.
                </p>
              </div>

              <input
                type="hidden"
                name="access_key"
                value="6eedd17f-54fd-4fa4-883b-6270e2a66a39"
              />

              <div className="form-row">
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  className="contact-inpust"
                  required
                />
                <input
                  type="email"
                  placeholder="Your email"
                  name="email"
                  className="contact-inpust"
                  required
                />
              </div>

              <div className="form-row">
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  className="contact-inpust"
                  required
                />
                <select
                  name="topic"
                  className="contact-inpust"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select topic
                  </option>
                  <option value="project">Project inquiry</option>
                  <option value="job">Job opportunity</option>
                  <option value="collab">Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Tell me about your idea or requirement"
                required
              />

              <button type="submit">
                Send Message
                <i className="fa-solid fa-paper-plane" aria-hidden="true" />
              </button>
            </form>

            <aside className="contact-right">
              <div className="contact-illustration" aria-hidden="true">
                <div className="contact-illustration-badge">Portfolio</div>
                <div className="contact-illustration-title">
                  Available for freelance and full-time opportunities
                </div>
              </div>

              <div className="contact-info-card">
                <h3>Quick Details</h3>
                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <i className="fa-solid fa-envelope" aria-hidden="true" />
                    <div>
                      <span>Email</span>
                      <strong>sadhanrohit@gmail.com</strong>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <i
                      className="fa-solid fa-location-dot"
                      aria-hidden="true"
                    />
                    <div>
                      <span>Location</span>
                      <strong>Nepal</strong>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <i className="fa-solid fa-clock" aria-hidden="true" />
                    <div>
                      <span>Response time</span>
                      <strong>Within 12 hours</strong>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </section>
        </div>
      </div>
    </>
  );
}

export default Contact;
