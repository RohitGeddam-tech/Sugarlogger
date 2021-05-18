import * as React from "react"
import { Link } from "gatsby"
import logo from "../../images/SugarloggerLogo.svg"
import "../css/header.css"
import NavLinks from "./NavBarLinks"

const Header = ({clicked, setClicked}) => (
  <header>
    <nav className="header-nav">
      <div className="logo" onClick={()=>setClicked(false)}>
        {/* <Link to="/" onClick={()=>setClicked(false)}> */}
          <img src={logo} alt="logo " />
        {/* </Link> */}
      </div>
      <div className="nav-links">
        {/* {NavLinks.map(document => (
          <Link
            className="link-name"
            activeClassName="link-active"
            to={document.links}
          >
            {document.name}
          </Link>
        ))} */}
        <Link className="link-name">For Path Labs</Link>
        <Link className="link-name">For Patients</Link>
        <Link className="link-name">For Doctors</Link>
        <Link to="/" className="link-active">Blogs</Link>
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
