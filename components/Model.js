import React from 'react';

const Model = ({ ModelData }) => {
  const data = ModelData.ModelData;
 
  return (
    <div>
      {data.map((model) => (
        <div
          key={model.target}
          className="portfolio-modal modal fade"
          id={model.target}
          tabIndex="-1"
          role="dialog"
          aria-labelledby={`${model.target}Label`}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="fas fa-times"></i>
                </span>
              </button>
              <div className="modal-body text-center">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h2
                        className="portfolio-modal-title text-secondary text-uppercase mb-0"
                        id={`${model.target}Label`}
                      >
                        {model.name}
                      </h2>

                      <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                          <i className="fas fa-star"></i>
                        </div>
                        <div className="divider-custom-line"></div>
                      </div>

                      <img
                        className="img-fluid rounded mb-5"
                        src={model.image}
                        alt=""
                      />
                      <h4>
                        Live Link:{' '}
                        <a target="_blank" href={model.link}>
                          {model.link}
                        </a>
                      </h4>
                      <p className="mb-5">{model.description}</p>
                      <button className="btn btn-primary" data-dismiss="modal">
                        <i className="fas fa-times fa-fw"></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Model;
