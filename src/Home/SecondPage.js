import * as React from "react"
import { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "../css/SecondPage.css"
import { Search } from "semantic-ui-react"
// import Cardbox from "../Utils/CardBox"
import Cardbtn from "../utils/Cardbtn"

const remUnderline = e => {
  e.target.style.textDecoration = "none"
}
const addUnderline = e => {
  e.target.style.textDecoration = "underline"
}

const SecondPage = () => {
  const [page, setPage] = useState(1)
  const perPage = 9

  const indexOfLastPost = page * perPage
  const indexOfFirstPost = indexOfLastPost - perPage
  const paginate = pageNumber => setPage(pageNumber)

  const data = useStaticQuery(graphql`
    query Genrescatquery {
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
              lastname
            }
            published_at
            strapiId
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="second-container">
        <div className="searchbox">
          <Search placeholder="Search" />
        </div>
        <div className="cardBox">
          <div className="allCards">
            {data.allStrapiBlogs.edges
              .slice(indexOfFirstPost, indexOfLastPost)
              .map(doc => {
                return (
                  <div className="inherit-boxcard">
                    <Link
                      to={`/article/${doc.node.id}`}
                      className="boxcard"
                      key={doc.node.id}
                    >
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
                            <p>{doc.node.description.slice(0,150)}</p>
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="card-left">
                            <h1>
                              By
                              {/* <h2>
                                {doc.node.author.firstname}{" "}
                                {doc.node.author.lastname}
                              </h2> */}
                            </h1>
                            <p>{doc.node.published_at.slice(0, 10)}</p>
                          </div>
                          <div className="card-right">
                            <Link to={`/article/${doc.node.id}`}>
                              <h1
                                onMouseEnter={addUnderline}
                                onMouseLeave={remUnderline}
                              >
                                READ MORE
                              </h1>
                            </Link>
                            <Link to={`/article/${doc.node.id}`}>
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
            totalPosts={data.allStrapiBlogs.edges.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  )
}

export default SecondPage
