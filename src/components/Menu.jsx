import React, { Component } from "react";
import "./Menu.css";
import { Link, NavLink } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div>
        <div className="div-menu div-container-all">
          <ul className="div-menu-ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addbook">Add Book</Link>
            </li>
            <li>Display Books</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
