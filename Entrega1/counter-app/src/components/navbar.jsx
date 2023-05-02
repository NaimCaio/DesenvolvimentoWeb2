import React, { Component } from "react";

// Stateless Functional Component

class NavBar extends Component {
  render() {
    console.log("props", this.props);
    const { totalCounters, onCreate} = this.props;
    console.log("teste")
    console.log(onCreate)
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
        <a >
        <button
              onClick={() => onCreate()}
              className="btn btn-secondary btn-sm"
              style={{backgroundColor:"green"}}
            >
              +
            </button>
        </a>
      </nav>
    );
    }
}
export default NavBar;
