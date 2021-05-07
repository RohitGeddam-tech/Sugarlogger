import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import "../css/SecondPage.css"
import { Search } from "semantic-ui-react"
import Cardbox from "./CardBox"
import Cardbtn from "../../utils/Cardbtn"
import addUnderline from "../../utils/addUnderline"
import remUnderline from "../../utils/remUnderline"

const SecondPage = () => {
  const [page, setPage] = useState(0)
  const perPage = 9

  const pageVisited = page * perPage

  const Row = Cardbox.reverse().slice(pageVisited, pageVisited + perPage).map(doc => {
    return (
      <Link to="/article/" className="boxcard" key={doc.id}>
        <div className="cardimage">
          <img src={doc.image} alt="banner" />
        </div>
        <div className="cardinfo">
          <div className="card-start">
            <div className="card-genre">
              <button className="card-btn">{doc.buttonname}</button>
              <button className="card-btn">{doc.btnname}</button>
            </div>
            <div className="card-detail">
              <h1>{doc.Title}</h1>
              <p>{doc.para}</p>
            </div>
          </div>
          <div className="card-footer">
            <div className="card-left">
              <h1>
                By <h2>{doc.by}</h2>
              </h1>
              <p>{doc.date}</p>
            </div>
            <div className="card-right">
              <Link to="/article/">
                <h1 onMouseEnter={addUnderline} onMouseLeave={remUnderline}>
                  {doc.newbtn}
                </h1>
              </Link>
              <Link to="/article/">
                <i className="large arrow right icon"></i>
              </Link>
            </div>
          </div>
        </div>
      </Link>
    )
  })

  const handleClick = () => {
    setPage(page + 1)
  }

  const prevClick = () => {
    if (page > 0) {
      setPage(page - 1)
    }
  }

  const activebtn = page === 0 ? "inactive" : "activebtn"

  const check = () => {
    if(Row === ''){
      return 'empty row'
    }
  }

  console.log('card length',Cardbox.length)

  console.log(check())

  return (
    <>
      <div className="second-container">
        <div className="searchbox">
          <Search placeholder="Search" />
        </div>
        <div className="cardBox">
          <div className="allCards">{Row}</div>
          <Cardbtn
            page={page}
            setPage={setPage}
            prevClick={prevClick}
            handleClick={handleClick}
            activebtn={activebtn}
          />
        </div>
      </div>
    </>
  )
}

export default SecondPage
