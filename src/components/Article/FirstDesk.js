import React from "react"
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
import { StaticQuery,graphql, Link } from "gatsby"

const FirstDesk = () => {
  return (
    <>
      <div className="article-desk">
        <div className="articledesk-container">
          <div className="article-left">
            <StaticQuery
              query={graphql`
                query newarticlequery {
                  strapiBlogs {
                    id
                    title
                    description
                    content {
                      content
                      heading
                      id
                      images {
                        info
                        image {
                          childImageSharp {
                            fluid {
                              src
                            }
                          }
                        }
                      }
                    }
                    tag {
                      name
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
                    published_at
                    author {
                      username
                    }
                  }
                }
              `}
              render={data => (
                <>
                  <div className="artdeskcard" key={data.strapiBlogs.id}>
                    <div className="artdeskboxcard">
                      <div className="artdesk-cardimage">
                        <img
                          src={data.strapiBlogs.image.childImageSharp.fluid.src}
                          alt="banner"
                        />
                      </div>
                      <div className="cardinfo">
                        <div
                          className="card-start"
                          style={{ paddingTop: "10px" }}
                        >
                          <div className="card-genre">
                            {data.strapiBlogs.categories.map(doc => (
                              <button className="card-btn">{doc.name}</button>
                            ))}
                          </div>
                          <div className="cardartdesk-detail">
                            <h1>{data.strapiBlogs.title}</h1>
                            <p>{data.strapiBlogs.description}</p>
                          </div>
                        </div>
                        <div className="iconcard-details">
                          <div className="ui avatar image">
                            <h1>JK</h1>
                          </div>
                          <div className="cardart-footer">
                            <div className="card-color">
                              <h2>By</h2>
                              <h1>{data.strapiBlogs.author.username}</h1>
                            </div>
                            <p>on {data.strapiBlogs.published_at.slice(0,10)}</p>
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
                      {data.strapiBlogs.content.map(doc => (
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
                                    <img
                                      src={mark.image.childImageSharp.fluid.src}
                                      alt="multiple"
                                    />
                                  ))}
                                </div>
                              </>
                            ) : null}
                            {doc.images.length === 2 ? (
                              <>
                                <div className="images5">
                                  {doc.images.slice(0, 2).map(mark => (
                                    <img
                                      src={mark.image.childImageSharp.fluid.src}
                                      alt="multiple"
                                    />
                                  ))}
                                </div>
                              </>
                            ) : null}
                            {doc.images.length === 3 ? (
                              <>
                                <div className="images3">
                                  {doc.images.slice(0, 3).map(mark => (
                                    <img
                                      src={mark.image.childImageSharp.fluid.src}
                                      alt="multiple"
                                    />
                                  ))}
                                </div>
                              </>
                            ) : null}
                            {doc.images.length === 4 ? (
                              <>
                                <div className="images3">
                                  {doc.images.slice(0, 3).map(mark => (
                                    <img
                                      src={mark.image.childImageSharp.fluid.src}
                                      alt="multiple"
                                    />
                                  ))}
                                </div>
                                <div className="images4">
                                  {doc.images.slice(3, 4).map(mark => (
                                    <img
                                      src={mark.image.childImageSharp.fluid.src}
                                      alt="multiple"
                                    />
                                  ))}
                                </div>
                              </>
                            ) : null}
                            {doc.images.length === 5 ? (
                              <>
                                <div className="images3">
                                  {doc.images.slice(0, 3).map(mark => (
                                    <img
                                      src={mark.image.childImageSharp.fluid.src}
                                      alt="multiple"
                                    />
                                  ))}
                                </div>
                                <div className="images5">
                                  {doc.images.slice(3, 5).map(mark => (
                                    <img
                                      src={mark.image.childImageSharp.fluid.src}
                                      alt="multiple"
                                    />
                                  ))}
                                </div>
                              </>
                            ) : null}
                            {doc.images.length === 6 ? (
                              <>
                                <div className="images3">
                                  {doc.images.slice(0, 3).map(mark => (
                                    <img
                                      src={mark.image.childImageSharp.fluid.src}
                                      alt="multiple"
                                    />
                                  ))}
                                </div>
                                <div className="images3">
                                  {doc.images.slice(3, 6).map(mark => (
                                    <img
                                      src={mark.image.childImageSharp.fluid.src}
                                      alt="multiple"
                                    />
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
                </>
              )}
            />
            <div className="diviider"></div>
            <div className="commentbox">
              <h1>add a comment</h1>
              <Comments />
            </div>
            <div className="diviider"></div>
            <div className="commentbox">
              <h1>View comments</h1>
              <ViewComments />
            </div>
            <div className="diviider"></div>
            <Related />
          </div>
          <div className="article-right">
            <div className="adbox">
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

export default FirstDesk
