import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../media/F-Liste Logo v5 bunt.png";

export class Header extends Component {
  render() {
    return (
      <header className="head">
        <div className="head-left">
          <Link to="/">
            <img className="logo" src={logo} alt="logo_header" height="50px" />
          </Link>
        </div>
        <nav className="head-right">
            <Link to="/subscribe">
                <button id="button">Test sichern</button>
            </Link>
            <Link to="/aboutus">
                <button id="button">Über uns</button>
            </Link>
            {/* <Link to="/subscribe">
                <button id="button">Subscribe</button>
            </Link>
            <Link to="/subscribe">
                <button id="button">Subscribe</button>
            </Link> */}
        </nav>
      </header>
    );
  }
}

export default Header;
