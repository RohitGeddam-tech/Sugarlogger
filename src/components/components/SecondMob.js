import * as React from "react"
import { useState } from "react"
import { Link, StaticQuery, graphql, useStaticQuery } from "gatsby"
import "../css/SecondPage.css"
import { Search } from "semantic-ui-react"
import CardDetail from "./CardDetail"
import Mobbox from "../../utils/Mobbox"
import Cardbtn from "../../utils/Cardbtn"
import addUnderline from "../../utils/addUnderline"
import remUnderline from "../../utils/remUnderline"

const SecondMob = () => {
  const [page, setPage] = useState(1)
  const perPage = 8

  const pageVisited = page * perPage

  const pageCalci = pageVisited + perPage
  const indexOfLastPost = page * perPage
  const indexOfFirstPost = indexOfLastPost - perPage
  const currentPosts = CardDetail.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = pageNumber => setPage(pageNumber)

  const Row = currentPosts.reverse().map((doc, index) => {
    return (
      <div className="inherit-mobcard" key={index}>
        {doc.body}
      </div>
    )
  })

  const NewMobbox = () => {
    const data = useStaticQuery(graphql`
      query latestquery {
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
            }
          }
        }
      }
    `)
    return (
      <>
        {data.allStrapiBlogs.edges
          .reverse()
          .slice(pageVisited, pageCalci)
          .map(doc => (
            <Link to="/article/" className="Mobobcard" key={doc.node.id}>
              <div className="Mobboxcard">
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
                        <button className="card-btn">{document.name}</button>
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
                          {doc.node.author.firstname} {doc.node.author.lastname}
                        </h2>
                      </h1>
                      <p>{doc.node.published_at.slice(0, 10)}</p>
                    </div>
                    <div className="card-right">
                      <Link to="/article/">
                        <h1
                          onMouseEnter={addUnderline}
                          onMouseLeave={remUnderline}
                        >
                          READ MORE
                        </h1>
                      </Link>
                      <Link to="/article/">
                        <i className="large arrow right icon"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </>
    )
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
      <div className="secondmob-container">
        <div className="searchmobbox">
          <Search placeholder="Search" />
        </div>
        <div className="cardMobBox">
          <div className="allCards">{Row}</div>
          <Cardbtn
            page={page}
            setPage={setPage}
            postsPerPage={perPage}
            totalPosts={CardDetail.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  )
}

export default SecondMob
