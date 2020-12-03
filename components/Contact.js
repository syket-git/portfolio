import React from 'react';

const Contact = () => {
  return (
    <div>
      <section className="page-section bg-primary text-white" id="contact">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white mb-0">
            Contact Me
          </h2>

          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>

          <div className="row">
            <div className="col-lg-5 ml-auto">
              <p className="lead">
                Although I am currently studying for my Diploma degree I will be
                free from July 2021. And I am interested in working with any
                company from July 2021 that thinks my skill will be helpful for
                them. If you are looking for someone like me, please let me
                know. Or you can just 'say hi' to me.
              </p>
              <div className="form-group">
                <button
                  className="btn contact btn-xl"
                  id="sendMessageButton"
                  type="submit"
                >
                  <a href="mailto:syketweb@gmail.com">Contact Me</a>
                </button>
              </div>
            </div>

            <div className="col-lg-5 mr-auto">
              <div>
                <h3>Email</h3>
                <p className="lead">syketweb@gmail.com </p>
              </div>
              <div>
                <h3>Phone</h3>
                <p className="lead">+8801865556490 (Always Available) </p>
              </div>

              <div>
                <h3>Address</h3>
                <p className="lead">
                  Amena Menson, Philkhana Road, Muradpur, Chittagong Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
