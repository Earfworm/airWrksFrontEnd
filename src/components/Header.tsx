import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import "./Header.css";
import SocialMedia from "./SocialMedia";

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
            {" "}
            <a href="">{<About />}</a>
          </Link>
          <a href="">{<SocialMedia />}</a>
          <Link to={""}>
            {" "}
            <a href="">{<Contact />}</a>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
