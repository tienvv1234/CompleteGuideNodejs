import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
console.log(5);
class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        // still waiting for loggin or not
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }

  render() {
    console.log(6);
    console.log("test", this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link className="left brand-logo" to={this.props.auth ? '/surveys' : '/'}>
            Emaily
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  console.log(11);
  console.log("auth", auth);
  return { auth };
}

export default connect(mapStateToProps)(Header);
