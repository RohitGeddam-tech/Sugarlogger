import * as React from "react"
import { useState } from "react"
import { Link, graphql, useStaticQuery, StaticQuery } from "gatsby"
import "../css/SecondPage.css"
import Host from "./Host"
import { Search } from "semantic-ui-react"
import Cardbox from "./CardBox"
import Cardbtn from "../../utils/Cardbtn"
import addUnderline from "../../utils/addUnderline"
import remUnderline from "../../utils/remUnderline"
import FirstDesk from "../Article/FirstDesk"
import FirstPage from "./FirstPage"
import PaginationComponent from "./PaginationComponent"
// import CardDetail from "./CardDetail"

const SecondPage = ({clicked, setClicked}) => {
  // const {blogs, name} = pageContext.pageData.node
  // console.log(pageContext.pageData)

  const [page, setPage] = useState(1)
  const perPage = 9

  const pageVisited = page * perPage

  const pageCalci = pageVisited + perPage

  // console.log("card no.", pageCalci)

  const indexOfLastPost = page * perPage
  const indexOfFirstPost = indexOfLastPost - perPage
  // const currentPosts = Cardbox.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = pageNumber => setPage(pageNumber)

  const data = useStaticQuery(graphql`
    query latestmobquery {
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

  const [newArt, setNewArt] = useState(4)

  const container = clicked ? 'nodisplay' : "second-container"

  const newcontainer = clicked ? '' : 'nodisplay'

  return (
    <>
      <div className={container}>
        <div className="searchbox">
          <Search placeholder="Search" />
        </div>
        <div className="cardBox">
          <div className="allCards">
            {/* {Row} */}
            {/* <NewerRow /> */}
            {data.allStrapiBlogs.edges
              .reverse()
              .slice(indexOfFirstPost, indexOfLastPost)
              .map((doc, index) => {
                return (
                  <div onClick={() => setNewArt(doc.node.strapiId)} className="inherit-boxcard" key={index}>
                    {/* <FirstPage indNum={doc.node.strapiId} /> */}
                    <div
                      onClick={() => setClicked(true)}
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
                            <p>{doc.node.description}</p>
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="card-left">
                            <h1>
                              By{" "}
                              <h2>
                                {doc.node.author === null ? (
                                  ""
                                ) : (
                                  <>
                                    {doc.node.author.firstname}{" "}
                                    {doc.node.author.lastname}
                                  </>
                                )}
                              </h2>
                            </h1>
                            <p>{doc.node.published_at.slice(0, 10)}</p>
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
                    </div>
                  </div>
                )
              })}
          </div>
          {console.log('data.lenggth',data.allStrapiBlogs.edges.length)}
          <Cardbtn
            page={page}
            setPage={setPage}
            postsPerPage={perPage}
            totalPosts={data.allStrapiBlogs.edges.length}
            paginate={paginate}
          />
        </div>
      </div>
      <div className={newcontainer}>
        <FirstDesk indNum={newArt} click={clicked} setClick={setClicked} />
      </div>
    </>
  )
}

export default SecondPage