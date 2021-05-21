import React, { useState } from "react"
import "../css/header.css"
import { Link } from "gatsby"
import { Sling as Hamburger } from "hamburger-react"
import Svg from "../images/SugarloggerLogo.svg"

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
            <Link className="link-nav">For Path Labs</Link>
            <Link className="link-nav">For Patients</Link>
            <Link className="link-nav">For Doctors</Link>
            <Link className="link-activenav">Blogs</Link>
            <Link className="link-nav">About Us</Link>
            <Link className="link-nav">Contact Us</Link>
            <Link to="/">
              <button className="logintab">Login</button>
            </Link>
            <Link to="/">
              <button className="starttab">Free trial</button>
            </Link>
          </div>
        ) : (
          <div className="fade" style={{ display: "none" }}>
            none
          </div>
        )}
      </div>
    </>
  )
}

export default TestMob
