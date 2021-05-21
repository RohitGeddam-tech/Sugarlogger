import React from "react"
import { Link } from "gatsby"

const FirstDeskpart = ({ Articlearray }) => {
  return (
    <>
      {Articlearray.map(doc => (
        <div className="artdeskcard" key={doc.id}>
          <div className="artdeskboxcard">
            <div className="artdesk-cardimage">
              <img src={doc.image} alt="banner" />
            </div>
            <div className="cardinfo">
              <div className="card-start" style={{ paddingTop: "10px" }}>
                <div className="card-genre">
                  <button className="card-btn">{doc.buttonname}</button>
                  <button className="card-btn">{doc.btnname}</button>
                </div>
                <div className="cardartdesk-detail">
                  <h1>{doc.Title}</h1>
                  <p>{doc.para}</p>
                </div>
              </div>
              <div className="iconcard-details">
                <div className="ui avatar image">
                  <h1>KP</h1>
                </div>
                <div className="cardart-footer">
                  <h1>By {doc.by}</h1>
                  <p>on {doc.date}</p>
                </div>
              </div>
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
        </div>
      ))}
    </>
  )
}

export default FirstDeskpart
