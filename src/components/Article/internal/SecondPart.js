import React, { useState } from "react"
import { Link } from "gatsby"
import Secondpart_art from "../../../utils/Secondpart_art"

const SecondPart = ({ Secondarray }) => {
  return (
    <>
      <div className="article-container">
        <Secondpart_art Secondarray={Secondarray} />
        <div className="aligndesk-bottom">
          <div className="articledesk-bottom">
            <h1> Share : </h1>
            <div className="article-icons">
              <Link to="/page-2/">
                <i className="big facebook icon"></i>
              </Link>
              <Link to="/page-2/">
                <i className="big instagram icon"></i>
              </Link>
              <Link to="/page-2/">
                <i className="big twitter square icon"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SecondPart
