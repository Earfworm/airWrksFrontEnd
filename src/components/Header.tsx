import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <Link to={"/"}>
        <h1 className="header-logo">airWrks</h1>
      </Link>
      <nav className="header-nav">
        <ul>
          <Link to={"/about"}>
            <div className="play">
              <p className="about-p">About</p>
            </div>
          </Link>
          <a href="https://www.linkedin.com/in/deshawnreid/">
            <div className="stop">
              <p className="social-p">Social</p>
            </div>
          </a>
          <Link to={""}>
            <div className="record">
              <p className="contact-p">Contact</p>
            </div>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
