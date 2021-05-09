import { StaticQuery, graphql } from "gatsby"
import React from "react"

const Secondpart_art = () => {
  return (
    <>
      <StaticQuery
        query={graphql`
          query UserTemplate {
            strapiBlogs {
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
            }
          }
        `}
        render={data => (
          <div className='second-part'>
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
                          <img src={mark.image.childImageSharp.fluid.src} alt="multiple" />
                        ))}
                      </div>
                    </>
                  ) : null}
                  {doc.images.length === 2 ? (
                    <>
                      <div className="images5">
                        {doc.images.slice(0, 2).map(mark => (
                          <img src={mark.image.childImageSharp.fluid.src} alt="multiple" />
                        ))}
                      </div>
                    </>
                  ) : null}
                  {doc.images.length === 3 ? (
                    <>
                      <div className="images3">
                        {doc.images.slice(0, 3).map(mark => (
                          <img src={mark.image.childImageSharp.fluid.src} alt="multiple" />
                        ))}
                      </div>
                    </>
                  ) : null}
                  {doc.images.length === 4 ? (
                    <>
                      <div className="images3">
                        {doc.images.slice(0, 3).map(mark => (
                          <img src={mark.image.childImageSharp.fluid.src} alt="multiple" />
                        ))}
                      </div>
                      <div className="images4">
                        {doc.images.slice(3, 4).map(mark => (
                          <img src={mark.image.childImageSharp.fluid.src} alt="multiple" />
                        ))}
                      </div>
                    </>
                  ) : null}
                  {doc.images.length === 5 ? (
                    <>
                      <div className="images3">
                        {doc.images.slice(0, 3).map(mark => (
                          <img src={mark.image.childImageSharp.fluid.src} alt="multiple" />
                        ))}
                      </div>
                      <div className="images5">
                        {doc.images.slice(3, 5).map(mark => (
                          <img src={mark.image.childImageSharp.fluid.src} alt="multiple" />
                        ))}
                      </div>
                    </>
                  ) : null}
                  {doc.images.length === 6 ? (
                    <>
                      <div className="images3">
                        {doc.images.slice(0, 3).map(mark => (
                          <img src={mark.image.childImageSharp.fluid.src} alt="multiple" />
                        ))}
                      </div>
                      <div className="images3">
                        {doc.images.slice(3, 6).map(mark => (
                          <img src={mark.image.childImageSharp.fluid.src} alt="multiple" />
                        ))}
                      </div>
                    </>
                  ) : null}
                  {doc.images.map(newer=>
                    newer.info === '' ? <div style={{display:'none'}}></div> : <span>{newer.info}</span> 
                  )}
                </li>
              </ol>
            )
          )}
          </div>
        )}
      />
    </>
  )
}

export default Secondpart_art
