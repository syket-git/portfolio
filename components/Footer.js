import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Location</h4>
              <p className="lead mb-0">
                Amena Menson, Philkhana Road, Muradpur
                <br />
                Chittagong, Bangladesh
              </p>
            </div>

            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Around the Web</h4>
              <a
                target="_blank"
                className="btn btn-outline-light btn-social mx-1"
                href="https://facebook.com/syketb"
              >
                <i className="fab fa-fw fa-facebook-f"></i>
              </a>
              <a
                target="_blank"
                className="btn btn-outline-light btn-social mx-1"
                href="https://twitter.com/syketb_twt"
              >
                <i className="fab fa-fw fa-twitter"></i>
              </a>
              <a
                target="_blank"
                className="btn btn-outline-light btn-social mx-1"
                href="https://www.linkedin.com/in/syket-bhattachergee-2a91041a3/"
              >
                <i className="fab fa-fw fa-linkedin-in"></i>
              </a>
              <a
                target="_blank"
                className="btn btn-outline-light btn-social mx-1"
                href="https://github.com/syket-git"
              >
                <i className="fab fa-fw fa-github"></i>
              </a>
            </div>

            <div className="col-lg-4">
              <h4 className="text-uppercase mb-4">Language</h4>
              <div className="language">
                <div className="bangla">
                  <span>ধন্যবাদ</span>
                  <div className="bangla-progress"></div>
                </div>
                <div className="english">
                  <span>Thanks</span>
                  <div className="english-progress"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
