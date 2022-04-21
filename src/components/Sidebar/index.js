import React from 'react'
import './index.scss'

import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faTrophy } from '@fortawesome/fontawesome-free-solid'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <nav>
        <div className="links">
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="black" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="black" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="black" />
          </NavLink>
        </div>
      </nav>
      <div className="socials">
        <h1> All right reserved, Oboz.</h1>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/orhannboz"
              className="fa fa-github"
            ></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
