import React, { useState, useEffect, useRef, useCallback } from "react"
import "./css/Firstarticle.css"
import FirstDeskpart from "./internal/FirstDeskpart"
import SecondPart from "./internal/SecondPart"
import Related from "./internal/Related"
import Comments from "./internal/Comments"
import ViewComments from "./internal/View"
import banner from "../../images/articleBanner.jpg"
import blog from "../../images/blog.png"
import mint1 from "../../images/Mint1.png"
import mint2 from "../../images/Mint2.png"
import mint3 from "../../images/Mint4.png"
import sleep from "../../images/Sleep.png"
import { StaticQuery, graphql, Link, useStaticQuery } from "gatsby"

const FirstTrial = ({ jk }) => {
  const locref = useRef(null)

  const isInView = () => {
    const rect = window.pageYOffset
    return rect <= jk
  }

  const [inView, setInView] = useState(false)

  const scrollHandler = useCallback(() => {
    setInView(isInView())
  }, [])

  useEffect(() => {
    setInView(isInView())
    window.addEventListener("scroll", scrollHandler)
    return () => {
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [scrollHandler])

  const adPos = inView ? "adbox" : "noad"

  const data = useStaticQuery(graphql`
    query articlevariablequery {
      allStrapiBlogs {
        edges {
          node {
            id
            title
            description
            content {
              content
              heading
              id
              images {
                image {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
                info
              }
            }
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
      <div className="article-desk">
        <div className="articledesk-container">
          <div className="article-left">
            <div
              className="artdeskcard"
              key={data.allStrapiBlogs.edges[0].node.id}
            >
              <div className="artdeskboxcard">
                <div className="artdesk-cardimage">
                  <img
                    src={
                      data.allStrapiBlogs.edges[0].node.image.childImageSharp
                        .fluid.src
                    }
                    alt="banner"
                  />
                </div>
                <div className="cardinfo">
                  <div className="card-start" style={{ paddingTop: "10px" }}>
                    <div className="card-genre">
                      {data.allStrapiBlogs.edges[0].node.categories.map(doc => (
                        <button className="card-btn">{doc.name}</button>
                      ))}
                    </div>
                    <div className="cardartdesk-detail">
                      <h1>{data.allStrapiBlogs.edges[0].node.title}</h1>
                      <p>{data.allStrapiBlogs.edges[0].node.description}</p>
                    </div>
                  </div>
                  <div className="iconcard-details">
                    <div className="ui avatar image">
                      <h1>JK</h1>
                    </div>
                    <div className="cardart-footer">
                      {data.allStrapiBlogs.edges[0].node.author === null ? (
                        <div style={{ display: "none" }}>none</div>
                      ) : (
                        <div className="card-color">
                          <h2>By</h2>
                          <h1>
                            {data.allStrapiBlogs.edges[0].node.author.firstname}{" "}
                            {data.allStrapiBlogs.edges[0].node.author.lastname}
                          </h1>
                        </div>
                      )}
                      <p>
                        on{" "}
                        {data.allStrapiBlogs.edges[0].node.published_at.slice(
                          0,
                          10
                        )}
                      </p>
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
            <div className="diviider"></div>
            <div className="article-container">
              <div className="second-part">
                {data.allStrapiBlogs.edges[0].node.content.map(doc => (
                  <ol>
                    <li>
                      <h1>
                        {doc.id}. {doc.heading}
                      </h1>
                      <p>{doc.content}</p>
                      {doc.images.length === 1 ? (
                        <>
                          <div className="images4">
                            {doc.images.slice(0, 1).map(mark => (
                              <>
                                {mark.image === null ? (
                                  <div className="nodisplay"></div>
                                ) : (
                                  <img
                                    src={mark.image.childImageSharp.fluid.src}
                                    alt="multiple"
                                  />
                                )}
                              </>
                            ))}
                          </div>
                        </>
                      ) : null}
                      {doc.images.length === 2 ? (
                        <>
                          <div className="images5">
                            {doc.images.slice(0, 2).map(mark => (
                              <>
                                {mark.image === null ? (
                                  <div className="nodisplay"></div>
                                ) : (
                                  <img
                                    src={mark.image.childImageSharp.fluid.src}
                                    alt="multiple"
                                  />
                                )}
                              </>
                            ))}
                          </div>
                        </>
                      ) : null}
                      {doc.images.length === 3 ? (
                        <>
                          <div className="images3">
                            {doc.images.slice(0, 3).map(mark => (
                              <>
                                {mark.image === null ? (
                                  <div className="nodisplay"></div>
                                ) : (
                                  <img
                                    src={mark.image.childImageSharp.fluid.src}
                                    alt="multiple"
                                  />
                                )}
                              </>
                            ))}
                          </div>
                        </>
                      ) : null}
                      {doc.images.length === 4 ? (
                        <>
                          <div className="images3">
                            {doc.images.slice(0, 3).map(mark => (
                              <>
                                {mark.image === null ? (
                                  <div className="nodisplay"></div>
                                ) : (
                                  <img
                                    src={mark.image.childImageSharp.fluid.src}
                                    alt="multiple"
                                  />
                                )}
                              </>
                            ))}
                          </div>
                          <div className="images4">
                            {doc.images.slice(3, 4).map(mark => (
                              <>
                                {mark.image === null ? (
                                  <div className="nodisplay"></div>
                                ) : (
                                  <img
                                    src={mark.image.childImageSharp.fluid.src}
                                    alt="multiple"
                                  />
                                )}
                              </>
                            ))}
                          </div>
                        </>
                      ) : null}
                      {doc.images.length === 5 ? (
                        <>
                          <div className="images3">
                            {doc.images.slice(0, 3).map(mark => (
                              <>
                                {mark.image === null ? (
                                  <div className="nodisplay"></div>
                                ) : (
                                  <img
                                    src={mark.image.childImageSharp.fluid.src}
                                    alt="multiple"
                                  />
                                )}
                              </>
                            ))}
                          </div>
                          <div className="images5">
                            {doc.images.slice(3, 5).map(mark => (
                              <>
                                {mark.image === null ? (
                                  <div className="nodisplay"></div>
                                ) : (
                                  <img
                                    src={mark.image.childImageSharp.fluid.src}
                                    alt="multiple"
                                  />
                                )}
                              </>
                            ))}
                          </div>
                        </>
                      ) : null}
                      {doc.images.length === 6 ? (
                        <>
                          <div className="images3">
                            {doc.images.slice(0, 3).map(mark => (
                              <>
                                {mark.image === null ? (
                                  <div className="nodisplay"></div>
                                ) : (
                                  <img
                                    src={mark.image.childImageSharp.fluid.src}
                                    alt="multiple"
                                  />
                                )}
                              </>
                            ))}
                          </div>
                          <div className="images3">
                            {doc.images.slice(3, 6).map(mark => (
                              <>
                                {mark.image === null ? (
                                  <div className="nodisplay"></div>
                                ) : (
                                  <img
                                    src={mark.image.childImageSharp.fluid.src}
                                    alt="multiple"
                                  />
                                )}
                              </>
                            ))}
                          </div>
                        </>
                      ) : null}
                      {doc.images.map(newer =>
                        newer.info === "" ? (
                          <div style={{ display: "none" }}></div>
                        ) : (
                          <span>{newer.info}</span>
                        )
                      )}
                    </li>
                  </ol>
                ))}
              </div>
              <div className="aligndesk-bottom">
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
            <div className="diviider"></div>
            <div className="commentbox">
              <h1>Add a Comment</h1>
              <Comments />
            </div>
            <div className="diviider"></div>
            <div className="commentbox">
              <h1>View comments</h1>
              <ViewComments />
            </div>
            <div className="diviider"></div>
            <div className="related-heading">
              <h1>Related Articles</h1>
            </div>
            <Related classname="artrelboxcard" />
            <Related classname="artrelboxcard" />
            <Related classname="artrelboxcard" />
          </div>
          <div className="article-right" ref={locref}>
            <div className={adPos}>
              <div className="ad">
                <h1>AD</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FirstTrial
