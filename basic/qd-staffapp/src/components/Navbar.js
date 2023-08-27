import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home123
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              News
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;