import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <Link to={"/"}>
        {" "}
        {/* //need to make logo image for airWrks not final logo image. */}
        <img src={"/assets/airWrksLogo.png"} alt="airWrks-Logo" />
      </Link>
      <nav className="header-nav">
        <ul>
          <Link to={"/about"}>
            <div className="play"></div>
          </Link>
          <div className="stop"></div>
          <Link to={""}>
            <div className="record"></div>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
