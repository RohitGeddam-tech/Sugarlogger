import React from "react"
import { Link } from "gatsby"
import banner from "../../images/banner.png"
import "semantic-ui-css/semantic.min.css"
import "../css/FirstPage.css"
import GenresNav from "../../utils/GenresNav"
import NavLinks from './NavLinks'

const FirstMob = () => {
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
          <div className="bannermobbox">
            <div className="banner-title">
              <h1>Featured Post</h1>
            </div>
            <div className="diviider"></div>
            <div className="banner-mobimg">
              <img src={banner} alt="banner" />
            </div>
            <div className="banner-mobdetail">
              <div className="banner-top">
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
              <div className="banner-mobfooter">
                <div className="right">
                  <h1>By Kiran Patil</h1>
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
          </div>
          {/* <div className="genres-bar">
              <GenresNav NavLinks={NavLinks} />
            </div> */}
        </div>
      </div>
    </>
  )
}

export default FirstMob
