import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
// import banner from "../images/banner.png"
import "semantic-ui-css/semantic.min.css"
import "../css/FirstPage.css"

const remUnderline = e => {
  e.target.style.textDecoration = "none"
}
const addUnderline = e => {
  e.target.style.textDecoration = "underline"
}

const FirstPage = () => {
  const data = useStaticQuery(graphql`
    query newquery {
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
        strapiId
      }
    }
  `)
  return (
    <>
      <div className="banner" key={data.strapiBlogs.id}>
      <div className="home-header">
          <div className="home-container">
            <h1>blogs</h1>
            <h2>Stay updated with us</h2>
          </div>
        </div>
        <div className="banner-container">
        <div className="banner-aftertitle">
            <h1>Featured Post</h1>
          </div>
            <div className="new-divider"></div>
          <Link to={`/article/${data.strapiBlogs.strapiId}`} className="bannerbox">
            <div className="bannerimg">
              <img
                src={data.strapiBlogs.image.childImageSharp.fluid.src}
                alt="banner"
              />
            </div>
            <div className="banner-detail">
              <div className="banner-top">
                <div className="banner-title">
                  <h1>{data.strapiBlogs.tag.name}</h1>
                </div>
                <div className="diviiider"></div>
                <div className="Genres">
                  {data.strapiBlogs.categories.map(doc => (
                    <button className="bannerbtn">{doc.name}</button>
                  ))}
                </div>
                <div className="banner-data">
                  <h1>{data.strapiBlogs.title}</h1>
                  <p>{data.strapiBlogs.description}</p>
                </div>
              </div>
              <div className="banner-footer">
                <div className="right">
                  <div className="colorOrange">
                    <h2>By </h2>
                    <h1>
                      {data.strapiBlogs.author.username}
                    </h1>
                  </div>
                  <p>{data.strapiBlogs.published_at.slice(0, 10)}</p>
                </div>
                <div className="left">
                  <Link to={`/article/${data.strapiBlogs.strapiId}`}>
                    <h1 onMouseEnter={addUnderline} onMouseLeave={remUnderline}>
                      Read More
                    </h1>
                  </Link>
                  <Link to={`/article/${data.strapiBlogs.strapiId}`}>
                    <i className="large arrow right icon"></i>
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default FirstPage