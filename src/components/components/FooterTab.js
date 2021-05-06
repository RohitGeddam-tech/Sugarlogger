import React, { useState } from "react"
import { Link } from "gatsby"
import call from "../../images/call.png"
import "../css/Footer.css"

const FooterTab = () => {
  const [search, setSearch] = useState("")

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const searchValue = search

  const handleSubmit = e => {
    e.preventDefault()
    if (search !== "") {
      console.log("search", searchValue)
    }
  }

  return (
    <footer>
      <div className="footer-container">
        <form className="subscribe-tab" onSubmit={handleSubmit}>
          <h1 className="subtext-tab">Subscribe to our Newsletter</h1>
          <input
            className="searchtab tab"
            type="text"
            name="search"
            value={search}
            onChange={handleChange}
            placeholder="Enter your email ID"
          />
          <button className="submitbtn tab" type="submit">
            Subscribe
          </button>
        </form>
        <div className="caller">
          <div className="diviider"></div>
          <div className="call-detail-tab">
            <img src={call} alt="call" />
            <p className="call-para-tab">
              Contact our sales team for a free demo, today at{" "}
              <a href="tel:+919834528228">+91 98345 28228</a>
            </p>
          </div>
          <div className="diviider"></div>
        </div>
        <div className="misc">
          <div className="boxes">
            <div className="box">
              <p>Product</p>
              <ul>
                <Link to="/page-2/">
                  <li>For Path labs</li>
                </Link>
                <Link to="/page-2/">
                  <li>For Patients</li>
                </Link>
                <Link to="/page-2/">
                  <li>For Doctors</li>
                </Link>
                <Link to="/page-2/">
                  <li>Pricing</li>
                </Link>
              </ul>
            </div>
            <div className="box">
              <p>Company</p>
              <ul>
                <Link to="/page-2/">
                  <li>About</li>
                </Link>
                <Link to="/page-2/">
                  <li>Contact</li>
                </Link>
                <Link to="/page-2/">
                  <li>Blog</li>
                </Link>
              </ul>
            </div>
            <div className="box">
              <p>Resources</p>
              <ul>
                <Link to="/page-2/">
                  <li>FAQs</li>
                </Link>
                <Link to="/page-2/">
                  <li>Terms & Conditions</li>
                </Link>
                <Link to="/page-2/">
                  <li>Privacy Policy</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="icons">
            <Link to="/page-2/">
              <i className="large facebook icon"></i>
            </Link>
            <Link to="/page-2/">
              <i className="large instagram icon"></i>
            </Link>
            <Link to="/page-2/">
              <i className="large twitter square icon"></i>
            </Link>
          </div>
          <div className="smallbox">
            <div className="diviider"></div>
            <h3 className="lastline">
              copyright <i className="copyright outline icon"></i> 2020 All
              Rights reserved{" "}
            </h3>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterTab
