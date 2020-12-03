import React from 'react';

const TopSection = () => {
  return (
    <div>
      <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          <img
            className="masthead-avatar mb-5"
            src="/static/profile.png"
            alt="Syket Bhattachergee"
          />

          <h1 className="masthead-heading text-uppercase mb-0">
            Syket Bhattachergee
          </h1>

          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>

          <p className="masthead-subheading font-weight-light mb-0">
            MERN Stack Developer
          </p>
        </div>
      </header>
    </div>
  );
};

export default TopSection;
