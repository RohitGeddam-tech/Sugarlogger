import React from 'react'
import {Link} from 'gatsby'
import addUnderline from './addUnderline'
import remUnderline from './remUnderline'

const Mobbox = ({id, image, buttonname, btnname, newbtn, Title, para, by, date}) => {
    return (
        <div className="Mobcard" key={id}>
        <div className="Mobboxcard">
          <div className="cardimage">
            <img src={image} alt="banner" />
          </div>
          <div className="cardinfo">
            <div className="card-start">
              <div className="card-genre">
                <button className="card-btn">{buttonname}</button>
                <button className="card-btn">{btnname}</button>
              </div>
              <div className="card-detail">
                <h1>{Title}</h1>
                <p>{para}</p>
              </div>
            </div>
            <div className="card-footer">
              <div className="card-left">
                <h1>By {by}</h1>
                <p>{date}</p>
              </div>
              <div className="card-right">
                <Link to="/article/">
                  <h1 onMouseEnter={addUnderline} onMouseLeave={remUnderline}>
                    {newbtn}
                  </h1>
                </Link>
                <Link to="/article/">
                  <i className="large arrow right icon"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Mobbox
