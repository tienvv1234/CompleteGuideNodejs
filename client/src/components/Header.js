import React, { Component } from "react";

console.log(5)
class Header extends Component {
  render() {
    console.log(6)
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">
            Emaily
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
