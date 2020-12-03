import React from 'react';

const Skills = () => {
  return (
    <div>
      <section className="page-section bg-primary text-white mb-0" id="skill">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white">
            Skills
          </h2>

          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row">
            <div className="col-md-5 ml-auto">
              <div className="skills-container">
                <div className="js">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4>JavaScript</h4>
                    <p className="percent">85%</p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar one"
                      role="progressbar"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="react mt-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4>React</h4>
                    <p className="percent">85%</p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar two"
                      role="progressbar"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="firebase mt-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4>Firebase</h4>
                    <p className="percent">80%</p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar three"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="express mt-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4>Express JS</h4>
                    <p className="percent">70%</p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar four"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 mr-auto">
              <div className="mongodb">
                <div className="d-flex justify-content-between align-items-center">
                  <h4>MongoDB</h4>
                  <p className="percent">80%</p>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar five"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="bootstrap mt-4">
                <div className="d-flex justify-content-between align-items-center">
                  <h4>React Bootstrap</h4>
                  <p className="percent">90%</p>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar six"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="material mt-4">
                <div className="d-flex justify-content-between align-items-center">
                  <h4>Material-UI</h4>
                  <p className="percent">80%</p>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar seven"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="git mt-4">
                <div className="d-flex justify-content-between align-items-center">
                  <h4>GitHub</h4>
                  <p className="percent">90%</p>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar eight"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
