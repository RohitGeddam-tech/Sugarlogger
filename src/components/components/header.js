import * as React from "react"
import { Link } from "gatsby"
import logo from "../../images/SugarloggerLogo.svg"
import "../css/header.css"

const NavLinks = [
  {
    name: "For Path Labs",
    links: "/page-2/",
  },
  {
    name: "For Patients",
    links: "/page-2/",
  },
  {
    name: "For Doctors",
    links: "/page-2/",
  },
  {
    name: "Blogs",
    links: "/",
  },
  {
    name: "About Us",
    links: "/page-2/",
  },
  {
    name: "Contact Us",
    links: "/page-2/",
  },
]

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
          <button className="start">Start Free trial</button>
        </Link>
      </div>
    </nav>
  </header>
)

export default Header
