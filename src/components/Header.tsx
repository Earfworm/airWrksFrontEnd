import { Link } from "react-router-dom";

import "./Header.css";
import { Component } from "react";

class Header extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div className="Header">
        <Link to={"/"}>
          <h1 className="header-logo">airWrks</h1>
        </Link>
        <nav className="header-nav">
          <ul
            id="navbar"
            className={this.state.clicked ? "navbar active" : "navbar"}
          >
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
            <Link to={"/contact"}>
              <div className="record">
                <p className="contact-p">Contact</p>
              </div>
            </Link>
          </ul>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
