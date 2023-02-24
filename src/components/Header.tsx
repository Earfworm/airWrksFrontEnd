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
        <img src="/src/assets/airWrksLogo.png" alt="airWrks-Logo" />
      </Link>
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
    </div>
  );
};

export default Header;
