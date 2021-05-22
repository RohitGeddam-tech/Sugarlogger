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

// const FirstPage = () => {
//   return (
//     <>
//       <div className="banner">
//         <div className="home-header">
//           <div className="home-container">
//             <h1>blogs</h1>
//             <h2>Stay updated with us</h2>
//           </div>
//         </div>
//         <div className="banner-container">
//           <div className="banner-aftertitle">
//             <h1>Featured Post</h1>
//           </div>
//             <div className="new-divider"></div>
//           <Link to="/article/" className="bannerbox">
//             <div className="bannerimg">
//               <img src={banner} alt="banner" />
//             </div>
//             <div className="banner-detail">
//               <div className="banner-top">
//                 <div className="banner-title">
//                   <h1>Featured Post</h1>
//                 </div>
//                 <div className="diviider"></div>
//                 <div className="Genres">
//                   <button className="bannerbtn">Latest</button>
//                   <button className="bannerbtn">Diet Food</button>
//                   <button className="bannerbtn">Fitness</button>
//                 </div>
//                 <div className="banner-data">
//                   <h1>7 Health Food To Eat</h1>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                     do eiusmod tempor incididunt ut labore et dolore. Lorem
//                     ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                     eiusmod tempor incididunt ut labore et dolore.
//                   </p>
//                 </div>
//               </div>
//               <div className="banner-footer">
//                 <div className="right">
//                   <div className="colorOrange">
//                     <h2>By</h2>
//                     <h1>Kiran Patil</h1>
//                   </div>
//                   <p>26 January 2021</p>
//                 </div>
//                 <div className="left">
//                   <Link to="/article/">
//                     <h1 onMouseEnter={addUnderline} onMouseLeave={remUnderline}>
//                       Read More
//                     </h1>
//                   </Link>
//                   <Link to="/article/">
//                     <i className="large arrow right icon"></i>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </>
//   )
// }

// export default FirstPage

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
          firstname
          lastname
        }
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
          <Link to={`/article/${data.strapiBlogs.id}`} className="bannerbox">
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
                      {data.strapiBlogs.author.firstname}{" "}
                      {data.strapiBlogs.author.lastname}
                    </h1>
                  </div>
                  <p>{data.strapiBlogs.published_at.slice(0, 10)}</p>
                </div>
                <div className="left">
                  <Link to={`/article/${data.strapiBlogs.id}`}>
                    <h1 onMouseEnter={addUnderline} onMouseLeave={remUnderline}>
                      Read More
                    </h1>
                  </Link>
                  <Link to={`/article/${data.strapiBlogs.id}`}>
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