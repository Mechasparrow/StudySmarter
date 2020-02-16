import React from "react";
import ReactDOM from "react-dom";


class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className = "collapse navbar-collapse" id = "navbarNav">
            <a className = "navbar-brand" href = "/#">StdySrmter</a>

            <ul className = "navbar-nav ml-auto">
              <li className = "nav-item">
                <a className ="nav-link" href = "/">Home</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar;
