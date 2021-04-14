import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import "../css/SecondPage.css"
import { Search } from "semantic-ui-react"
import Cardbox from "./CardBox"
import Mobbox from "../../utils/Mobbox"
import Cardbtn from "../../utils/Cardbtn"

const SecondMob = () => {
  const [page, setPage] = useState(0)
  const perPage = 8

  const pageVisited = page * perPage

  const Row = Cardbox.slice(pageVisited, pageVisited + perPage).map(doc => {
    return (
      <Mobbox
        id={doc.id}
        image={doc.image}
        buttonname={doc.buttonname}
        btnname={doc.btnname}
        Title={doc.Title}
        para={doc.para}
        by={doc.by}
        date={doc.date}
        newbtn={doc.newbtn}
      />
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

  return (
    <>
      <div className="second-container">
        <div className="searchmobbox">
          <Search placeholder='Search' />
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

export default SecondMob
