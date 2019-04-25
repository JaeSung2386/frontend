import React, { Component } from 'react';

class Header extends Component {
    render() {
      return (
        <div>
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

          <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars"></i>
          </button>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown no-arrow mx-1">
                <i className="fas fa-bell fa-fw"></i>
                <span className="badge badge-danger badge-counter">3+</span>
            </li>
          </ul>
        </nav>
      </div>
      )
    }
}


export default Header;