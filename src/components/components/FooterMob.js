import React, { useState } from "react"
import { Link } from "gatsby"
import call from "../../images/call.png"
import "../css/Footer.css"

const FooterMob = () => {
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
      <div className="footermob-container">
        <form className="subscribe-tab" onSubmit={handleSubmit}>
          <h1 className="subtext-mob">Subscribe to our Newsletter</h1>
          <input
            className="searchpage tab"
            type="text"
            name="search"
            onChange={handleChange}
            value={search}
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
            <div className="boxmob">
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

export default FooterMob
