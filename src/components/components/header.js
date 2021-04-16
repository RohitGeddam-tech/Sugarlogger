import * as React from "react"
import { Link } from "gatsby"
import logo from "../../images/SugarloggerLogo.svg"
import "../css/header.css"
import NavLinks from './NavBarLinks'

const Header = () => (
  <header>
    <nav className="header-nav">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo " />
        </Link>
      </div>
      <div className="nav-links">
        {NavLinks.map(document => (
          <Link
            className="link-name"
            activeClassName="link-active"
            to={document.links}
          >
            {document.name}
          </Link>
        ))}
        <Link to="/">
          <button className="login">Login</button>
        </Link>
        <Link to="/">
          <button className="start">Start Free Trial</button>
        </Link>
      </div>
    </nav>
  </header>
)

export default Header
