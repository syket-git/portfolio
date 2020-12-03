import React from 'react';

const About = () => {
  return (
    <div>
      <section className="page-section mb-0" id="about">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase">About</h2>

          <div className="divider-custom ">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>

          <div className="row">
            <div className="col-lg-5 ml-auto">
              <p className="lead">
                I am Syket Bhattachergee. I am a professional React js
                Developer. I have been working on Web designed and Web
                Development services from 2018. Web Development is my passion.
                During this time I gained a lots of experience.
              </p>
            </div>
            <div className="col-lg-5 mr-auto">
              <p className="lead">
                I love coding so that's why I work with coding a long time
                without feeling any awkward and boring because of my interest in
                this sector.I love to teach people that's why I opened a YouTube
                channel where I taught coding which name is "React step by
                step".
              </p>
            </div>
          </div>

          <div className="text-center mt-4">
            <a
              className="btn btn-xl btn-outline-lights"
              target="_blank"
              href="https://drive.google.com/file/d/1q0sgscAjauAi2m9ZiLkEOGF9AsocUZme/view"
            >
              <i className="fas fa-download mr-2"></i>
              Get Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
