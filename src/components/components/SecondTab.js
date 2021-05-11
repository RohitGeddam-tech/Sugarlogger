import * as React from "react"
import { useState } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import "../css/SecondPage.css"
import { Search } from "semantic-ui-react"
import CardTab from "./CardTab"
import Cardbtn from "../../utils/Cardbtn"
import FirstTab from "../Article/FirstTab"
import Host from "./Host"

const SecondPage = () => {
  const [page, setPage] = useState(0)
  const perPage = 8

  const pageVisited = page * perPage

  const pageCalci = pageVisited + perPage
  const indexOfLastPost = page * perPage
  const indexOfFirstPost = indexOfLastPost - perPage
  const currentPosts = CardTab.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = pageNumber => setPage(pageNumber)

  const Row = currentPosts.reverse().map((doc, index) => {
    return (
      <div className="inherit-tabcard" key={index}>
        {doc.body}
      </div>
    )
  })

  const NewerRow = () => {
    return (
      <>
        <StaticQuery
          query={graphql`
            query latesttabquery {
              allStrapiBlogs {
                edges {
                  node {
                    id
                    title
                    description
                    image {
                      childImageSharp {
                        fluid {
                          src
                        }
                      }
                    }
                    categories {
                      name
                    }
                    author {
                      firstname
                    }
                    published_at
                  }
                }
              }
            }
          `}
          render={data =>
            data.allStrapiBlogs.edges
              .reverse()
              .slice(pageVisited, pageCalci)
              .map((doc, index) => (
                <div className="inherit-tabcard" key={index}>
                  <div style={{ display: "none" }}>
                    <FirstTab index={index} />
                  </div>
                  <Link to={`/article/`} className="boxcard" key={doc.node.id}>
                    <div className="cardimage">
                      <img
                        src={doc.node.image.childImageSharp.fluid.src}
                        alt="banner"
                      />
                    </div>
                    <div className="cardinfo">
                      <div className="card-start">
                        <div className="card-genre">
                          {doc.node.categories.map(document => (
                            <button className="card-btn">
                              {document.name}
                            </button>
                          ))}
                        </div>
                        <div className="card-detail">
                          <h1>{doc.node.title}</h1>
                          <p>{doc.node.description}</p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="card-left">
                          <h1>
                            By{" "}
                            <h2>
                              {doc.node.author.firstname}{" "}
                              {doc.node.author.lastname}
                            </h2>
                          </h1>
                          <p>{doc.node.published_at}</p>
                        </div>
                        <div className="card-right">
                          <Link to={`/article`}>
                            <h1
                              onMouseEnter={addUnderline}
                              onMouseLeave={remUnderline}
                            >
                              Read More
                            </h1>
                          </Link>
                          <Link to="/article/">
                            <i className="large arrow right icon"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="bottomgap"></div>
                    </div>
                  </Link>
                </div>
              ))
          }
        />
      </>
    )
  }

  function addUnderline(e) {
    e.target.style.textDecoration = "underline"
  }

  function remUnderline(e) {
    e.target.style.textDecoration = "none"
  }

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
        <div className="searchbox">
          <Search placeholder="Search" />
        </div>
        <div className="cardBox">
          <div className="allCards">{Row}</div>
          <Cardbtn
            page={page}
            setPage={setPage}
            postsPerPage={perPage}
            totalPosts={CardTab.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  )
}

export default SecondPage
