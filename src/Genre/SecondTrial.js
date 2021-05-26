import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import "../css/SecondPage.css"
import { Search } from "semantic-ui-react"
// import Cardbox from "../Utils/CardBox"
import Layout from '../components/layout'
import Cardbtn from "../utils/Cardbtn"
import GenresNav from "./Genre"

const remUnderline = e => {
  e.target.style.textDecoration = "none"
}
const addUnderline = e => {
  e.target.style.textDecoration = "underline"
}

const SecondPage = ({pageContext}) => {
    // console.log(pageContext.pageData)
  const { blogs } = pageContext.pageData.node
  
  const [page, setPage] = useState(1)
  const perPage = 9

  const indexOfLastPost = page * perPage
  const indexOfFirstPost = indexOfLastPost - perPage
  const paginate = pageNumber => setPage(pageNumber)

  return (
    <Layout>
    <GenresNav />
      <div className="second-container">
        <div className="searchbox">
          <Search placeholder="Search" />
        </div>
        <div className="cardBox">
          <div className="allCards">
            {blogs.slice(indexOfFirstPost, indexOfLastPost).map(doc => {
              return (
                <div className="inherit-boxcard">
                  <Link
                    to={`/article/${doc.id}`}
                    className="boxcard"
                    key={doc.id}
                  >
                    <div className="cardimage">
                      <img
                        src={doc.image.childImageSharp.fluid.src}
                        alt="banner"
                      />
                    </div>
                    <div className="cardinfo">
                      <div className="card-start">
                        {/* <div className="card-genre">
                          {doc.categories.map(document => (
                            <button className="card-btn">
                              {document.name}
                            </button>
                          ))}
                        </div> */}
                        <div className="card-detail">
                          <h1>{doc.title}</h1>
                          <p>{doc.description.substring(0,150)}{doc.description.length > 150 && '...'}</p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="card-left">
                          <h1>
                            By
                            <h2>
                              {doc.author.username}
                            </h2>
                          </h1>
                          <p>{doc.published_at.slice(0, 10)}</p>
                        </div>
                        <div className="card-right">
                          <Link to={`/article/${doc.id}`}>
                            <h1
                              onMouseEnter={addUnderline}
                              onMouseLeave={remUnderline}
                            >
                              READ MORE
                            </h1>
                          </Link>
                          <Link to={`/article/${doc.id}`}>
                            <i className="large arrow right icon"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
          <Cardbtn
            page={page}
            setPage={setPage}
            postsPerPage={perPage}
            totalPosts={blogs.length}
            paginate={paginate}
          />
        </div>
      </div>
    </Layout>
  )
}

export default SecondPage
