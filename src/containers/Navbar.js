import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import Logo from "../images/warbler-logo.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  logout() {
    this.props.logout();
  }

  handleClick(evt) {
    evt.preventDefault();
    this.logout();
  }

  render() {
    return (
      <nav className="navbar navbar-expand ">
        <div className="container-fluid">
          <div className="navbar-header" >
            <Link to="/" className="navbar-brand">
              <img src={ Logo } alt="Warbler Home" />
            </Link>
          </div>
          {
            (this.props.currentUser.isAuthenticated) 
              ? (
                <ul className="nav nav-navbar-nav navbar-right">
                  <li>
                    <Link to={ `/users/${ this.props.currentUser.user.id }/messages/new` }>New Message</Link>
                  </li>
                  <li>
                    <a onClick={ this.handleClick }>Log Out</a>
                  </li>
                </ul>
              )
              : ""
          }
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/signUp">Sign Up</Link>
            </li>
            <li>
              <Link to="/signIn">Sign In</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, { logout })(Navbar);