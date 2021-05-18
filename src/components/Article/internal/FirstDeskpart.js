import React from "react"
import { Link, StaticQuery, graphql, useStaticQuery } from "gatsby"

const FirstDeskpart = () => {
  const data = useStaticQuery(graphql`
    query mynewquery {
      strapiBlogs {
        id
        title
        description
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
  `)
  return (
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
            <div className="card-start" style={{ paddingTop: "10px" }}>
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
                <p>on {data.strapiBlogs.published_at}</p>
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
    </>
  )
}

export default FirstDeskpart
