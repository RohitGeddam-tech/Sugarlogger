import React, { useState, useEffect } from "react"
import "./css/Nav.css"
import { Link } from "gatsby"
import { Sling as Hamburger } from 'hamburger-react'
import Svg from "../images/SugarloggerLogo.svg"
import NavLinks from "./components/NavBarLinks"

const TestMob = () => {
  const [isActive, setActive] = useState(false)

  return (
    <>
      <div className="tabnav">
        {isActive ? (
          <div className="tabheader">
            <nav className="container-fullnav">
              <div className="nav-icon">
                <Hamburger
                  direction="right"
                  className="ham"
                  duration={0.4}
                  color="#202020"
                  toggled={isActive}
                  toggle={setActive}
                />
              </div>
              <div className="nav-image">
                <Link to="/">
                  <img src={Svg} alt="logo" />
                </Link>
              </div>
              <i className="big home icon"></i>
            </nav>
          </div>
        ) : (
          <div className="tabheader">
            <nav className="container-fullnav">
              <div className="nav-icon">
                <Hamburger
                  direction="left"
                  className="ham"
                  duration={0.4}
                  color="#202020"
                  toggled={isActive}
                  toggle={setActive}
                />
              </div>
              <div className="nav-image">
                <Link to="/">
                  <img src={Svg} alt="logo" />
                </Link>
              </div>
              <Link to="/">
                <button className="login-tab">Login</button>
              </Link>
            </nav>
          </div>
        )}
        {isActive ? (
          <div className="fade">
            {NavLinks.map(document => (
              <Link
                className="link-nav"
                activeClassName="link-activenav"
                to={document.links}
              >
                {document.name}
              </Link>
            ))}
            <Link to="/">
              <button className="logintab">Login</button>
            </Link>
            <Link to="/">
              <button className="starttab">Free trial</button>
            </Link>
          </div>
        ) : (
          <div className="fade" style={{ display: "none" }}>
            {NavLinks.map(document => (
              <Link
                className="link-name"
                activeClassName="link-active"
                to={document.links}
              >
                {document.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default TestMob
