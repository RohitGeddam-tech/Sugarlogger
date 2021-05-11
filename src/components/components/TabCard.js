import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import addUnderline from "../../utils/addUnderline"
import remUnderline from "../../utils/remUnderline"

const TabCard = () => {
  return (
    <>
      <StaticQuery
        query={graphql`
          query tabrowquery {
            strapiBlogs {
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
        `}
        render={data => (
          <div className="tabcard">
            <Link
              to="/article/"
              className="tabboxcard"
              key={data.strapiBlogs.id}
            >
              <div className="cardimage">
                <img
                  src={data.strapiBlogs.image.childImageSharp.fluid.src}
                  alt="banner"
                />
              </div>
              <div className="cardinfo">
                <div className="card-start">
                  <div className="card-genre">
                    {data.strapiBlogs.categories.map(document => (
                      <button className="card-btn">{document.name}</button>
                    ))}
                  </div>
                  <div className="card-detail">
                    <h1>{data.strapiBlogs.title}</h1>
                    <p>{data.strapiBlogs.description}</p>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="card-left">
                    <h1>
                      By{" "}
                      <h2>
                        {data.strapiBlogs.author.firstname}{" "}
                        {data.strapiBlogs.author.lastname}
                      </h2>
                    </h1>
                    <p>{data.strapiBlogs.published_at.slice(0, 10)}</p>
                  </div>
                  <div className="card-right">
                    <Link to="/article">
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
        )}
      />
    </>
  )
}

export default TabCard
