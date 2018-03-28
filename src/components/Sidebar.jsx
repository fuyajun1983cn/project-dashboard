import React, { Component } from 'react';
import './Sidebar.css';
import * as Icon from 'react-feather';

class Sidebar extends Component {
  render() {
    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              <Icon.Home color="red" size={16} className="feather"/>
              Dashboard <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Icon.File size={16} className="feather"/>
              Orders
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Icon.ShoppingCart size={16} className="feather"/>
              Products
            </a>
          </li>
        </ul>
      </div>
    </nav>
    );
  }
}

export default Sidebar;