import { StaticQuery, graphql,useStaticQuery, Link } from "gatsby"
import React from "react"
import addUnderline from "../../utils/addUnderline"
import remUnderline from "../../utils/remUnderline"

const NewRow = () => {
  const data = useStaticQuery(graphql`
    query rowquery {
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
      <Link
        to={`/article/`}
        className="boxcard"
        key={data.allStrapiBlogs.edges[0].node.id}
      >
        <div className="cardimage">
          <img
            src={
              data.allStrapiBlogs.edges[0].node.image.childImageSharp.fluid.src
            }
            alt="banner"
          />
        </div>
        <div className="cardinfo">
          <div className="card-start">
            <div className="card-genre">
              {data.allStrapiBlogs.edges[0].node.categories.map(document => (
                <button className="card-btn">{document.name}</button>
              ))}
            </div>
            <div className="card-detail">
              <h1>{data.allStrapiBlogs.edges[0].node.title}</h1>
              <p>{data.allStrapiBlogs.edges[0].node.description}</p>
            </div>
          </div>
          <div className="card-footer">
            <div className="card-left">
              <h1>
                By{" "}
                <h2>
                  {data.allStrapiBlogs.edges[0].node.author.firstname}{" "}
                  {data.allStrapiBlogs.edges[0].node.author.lastname}
                </h2>
              </h1>
              <p>
                {data.allStrapiBlogs.edges[0].node.published_at.slice(0, 10)}
              </p>
            </div>
            <div className="card-right">
              <Link to="/article">
                <h1 onMouseEnter={addUnderline} onMouseLeave={remUnderline}>
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
    </>
  )
}

export default NewRow
