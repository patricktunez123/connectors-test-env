import React from "react";

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="faq-contact">
      <h3>Get In Touch With Us</h3>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Names"
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="email"
                placeholder="Your email"
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="form-group">
              <textarea
                name="text"
                cols="30"
                rows="6"
                placeholder="Write your message here..."
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="col-lg-12 col-sm-12 text-center">
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
