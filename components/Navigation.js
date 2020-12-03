import Link from 'next/link';

const Navigation = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <div className="logo">
            <span>S</span>
          </div>
        </a>
        <button
          className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#skill"
              >
                Skill
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#contact"
              >
                Contact
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="https://drive.google.com/uc?export=download&id=1q0sgscAjauAi2m9ZiLkEOGF9AsocUZme"
              >
                <span className="resume">Resume</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .resume {
            border: 3px solid #1abc9c;
            padding: 12px;
            border-radius: 10px;
          }
        `}
      </style>
    </nav>
  );
};

export default Navigation;
