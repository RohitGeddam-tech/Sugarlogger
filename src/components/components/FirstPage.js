import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import banner from "../../images/banner.png"
import "semantic-ui-css/semantic.min.css"
import "../css/FirstPage.css"
import { Dropdown } from "semantic-ui-react"

const FirstPage = () => {
  function addUnderline(e) {
    e.target.style.textDecoration = "underline"
  }

  function remUnderline(e) {
    e.target.style.textDecoration = "none"
  }

  return (
    <>
      <div className="banner">
        <div className="banner-container">
          <Link to="/article/" className="bannerbox">
            <div className="bannerimg">
              <img src={banner} alt="banner" />
            </div>
            <div className="banner-detail">
              <div className="banner-top">
                <div className="banner-title">
                  <h1>Featured Post</h1>
                </div>
                <div className="diviider"></div>
                <div className="Genres">
                  <button className="bannerbtn">Latest</button>
                  <button className="bannerbtn">Diet Food</button>
                  <button className="bannerbtn">Fitness</button>
                </div>
                <div className="banner-data">
                  <h1>7 Health Food To Eat</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>
              <div className="banner-footer">
                <div className="right">
                  <div className="colorOrange">
                    <h2>By</h2>
                    <h1>Kiran Patil</h1>
                  </div>
                  <p>26 January 2021</p>
                </div>
                <div className="left">
                  <Link to="/article/">
                    <h1 onMouseEnter={addUnderline} onMouseLeave={remUnderline}>
                      Read More
                    </h1>
                  </Link>
                  <Link to="/article/">
                    <i className="large arrow right icon"></i>
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default FirstPage
