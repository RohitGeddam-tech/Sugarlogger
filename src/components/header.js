import * as React from "react"
import { Link } from "gatsby"
import logo from "../images/SugarloggerLogo.svg"
import "../css/header.css"

const Header = () => (
  <header>
    <nav className="header-nav">
      <div className="logo">
        <Link to="/" >
          <img src={logo} alt="logo " />
        </Link>
      </div>
      <div className="nav-links">
        <Link className="link-name">For Path Labs</Link>
        <Link className="link-name">For Patients</Link>
        <Link className="link-name">For Doctors</Link>
        <Link className="link-active">Blogs</Link>
        <Link className="link-name">About Us</Link>
        <Link className="link-name">Contact Us</Link>
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
