import React, { useState } from "react"

const Cardbtn = ({ postsPerPage, totalPosts, paginate, page, setPage }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }
  console.log(pageNumbers)

  const [perNumber, setPerNumber] = useState(1)
  const perRender = 4

  const indexOfLastPost = perNumber * perRender
  const indexOfFirstPost = indexOfLastPost - perRender
  const currentPosts = pageNumbers.slice(indexOfFirstPost, indexOfLastPost)

  const PrevPage = () => {
    if (page - 1 === 0) {
      return null
    } else {
      return (
        <button onClick={() => setPage(page - 1)} className="prevArrow">
          <i className="chevron left icon"></i>
        </button>
      )
    }
  }

  const NextPage = () => {
    if (page + 1 <= Math.ceil(totalPosts / postsPerPage)) {
      return (
        <button
          onClick={() => {
            setPage(page + 1)
          }}
          className="nextArrow"
        >
          <i className="chevron right icon"></i>
        </button>
      )
    } else {
      return null
    }
  }

  const PageRender = () => {
    if (page === 0 || page === 1 || page === 2 || page === 3 || page === 4) {
      return (
        <>
          {pageNumbers.slice(0, 4).map(number => {
            const pageLink = page === number ? "active-page" : "page-link"
            return (
              <li key={number} className="page-item">
                <button onClick={() => paginate(number)} className={pageLink}>
                  {number}
                </button>
              </li>
            )
          })}
        </>
      )
    } else {
      return (
        <>
          {pageNumbers.slice(3, 8).map(number => {
            const pageLink = page === number ? "active-page" : "page-link"
            return (
              <li key={number} className="page-item">
                <button onClick={() => paginate(number)} className={pageLink}>
                  {number}
                </button>
              </li>
            )
          })}
        </>
      )
    }
  }

  return (
    <div className="card-paginate">
      <PrevPage />
      <nav>
        <ul className="pagination">
          <PageRender />
        </ul>
      </nav>
      <NextPage />
    </div>
  )
}

export default Cardbtn
