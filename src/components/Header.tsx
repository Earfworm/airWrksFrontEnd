import About from "./About";
import Contact from "./Contact";
import "./Header.css";
import SocialMedia from "./SocialMedia";

const Header = () => {
  return (
    <div className="Header">
      <p className="logo">airWrks</p>
      <ul>
        <a href="">{<About />}</a>
        <a href="">{<SocialMedia />}</a>
        <a href="">{<Contact />}</a>
      </ul>
    </div>
  );
};

export default Header;
