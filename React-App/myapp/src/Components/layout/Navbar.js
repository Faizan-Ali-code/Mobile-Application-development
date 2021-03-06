import React, { Component } from "react";
import PropTypes from "prop-types";

export class Navbar extends Component {
  static defaultProps = {
    title: "GitHub-Finder",
    icon: "fab fa-github",
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <nav>
          <h1>
            <i className='fab fa-github'></i>
            {this.props.title}
          </h1>
        </nav>
      </div>
    );
  }
}

export default Navbar;
