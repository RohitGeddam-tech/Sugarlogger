import React from "react"
import { Link } from "gatsby"
import "../css/Firstarticle.css"
import Related from "./Related"
import Comments from "./Comments"
import ViewComments from "./View"
import Layout from "../components/layout"

const FirstDesk = ({ pageContext }) => {
  console.log(pageContext)
  const {
    id,
    image,
    categories,
    title,
    description,
    author,
    published_at,
    content,
  } = pageContext.pageData.node
  return (
    <Layout>
      <div className="noad">
        <div className="ad">
          <h1>AD</h1>
        </div>
      </div>
      <div className="article-desk">
        <div className="articledesk-container">
          <div className="article-left">
            <div className="artdeskcard" key={id}>
              <div className="artdeskboxcard">
                <div className="artdesk-cardimage">
                  <img src={image.childImageSharp.fluid.src} alt="banner" />
                </div>
                <div className="cardinfo">
                  <div className="card-start" style={{ paddingTop: "10px" }}>
                    <div className="card-genre">
                      {categories.map(doc => (
                        <button className="card-btn">{doc.name}</button>
                      ))}
                    </div>
                    <div className="cardartdesk-detail">
                      <h1>{title}</h1>
                      <p>{description}</p>
                    </div>
                  </div>
                  <div className="iconcard-details">
                    <div className="cardart-footer">
                      <div className="card-color">
                        <h2>By</h2>
                        <h1>
                          {author.username}
                        </h1>
                      </div>
                      <p>on {published_at.slice(0, 10)}</p>
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
                {content.map(doc => (
                  <ol>
                    <li>
                      {doc.heading === null ? (
                        <h1>
                        {doc.id} :-
                      </h1>
                      ) : (
                        <h1>
                          {doc.id}. {doc.heading}
                        </h1>
                      )}
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
              <h1>View Comments</h1>
              <ViewComments />
            </div>
            <div className="diviider"></div>
            <div className="related-heading">
              <h1>Related Articles</h1>
            </div>
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
    </Layout>
  )
}

export default FirstDesk
