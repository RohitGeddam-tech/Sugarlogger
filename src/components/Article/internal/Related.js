import React, { useState } from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import addUnderline from "../../../utils/addUnderline"
import remUnderline from "../../../utils/remUnderline"

// const Related = ({ Relatedbox }) => {
//   return (
//     <>
//       <div className="related-heading">
//         <h1>Related Articles</h1>
//       </div>
//       {Relatedbox.map(doc => (
//         <div className="artdeskcard" key={doc.id}>
//           <div className="artrelboxcard">
//             <div className="artdesk-cardimage">
//               <img src={doc.image} alt="banner" />
//             </div>
//             <div className="cardinfo">
//               <div className="card-start" style={{ paddingTop: "10px" }}>
//                 <div className="card-genre">
//                   <button className="card-btn">{doc.buttonname}</button>
//                   <button className="card-btn">{doc.btnname}</button>
//                 </div>
//                 <div className="cardartdesk-detail">
//                   <h1>{doc.Title}</h1>
//                   <p>{doc.para}</p>
//                 </div>
//               </div>
//               <div className="iconcard-details">
//                 <div className="ui avatar image">
//                   <h1>KP</h1>
//                 </div>
//                 <div className="cardrel-footer">
//                   <div className="right">
//                     <div className="colorOrange">
//                       <h2>By</h2>
//                       <h1>{doc.by}</h1>
//                     </div>
//                     <p>on {doc.date}</p>
//                   </div>
//                   <div className="left">
//                     <Link to="/article/">
//                       <h1
//                         onMouseEnter={addUnderline}
//                         onMouseLeave={remUnderline}
//                       >
//                         {doc.newbtn}
//                       </h1>
//                     </Link>
//                     <Link to="/article/">
//                       <i className="large arrow right icon"></i>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   )
// }

const RelatedNew = ({classname}) => {
  return (
    <>
      <StaticQuery
        query={graphql`
          query articlequery {
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
        `}
        render={data =>(
            <div className="artdeskcard" key={data.allStrapiBlogs.edges[0].node.id}>
              <div className={classname}>
                <div className="artdesk-cardImage">
                  <img
                    src={data.allStrapiBlogs.edges[0].node.image.childImageSharp.fluid.src}
                    alt="banner"
                  />
                </div>
                <div className="cardinfo">
                  <div className="card-start" style={{ paddingTop: "10px" }}>
                    <div className="card-genre">
                      {data.allStrapiBlogs.edges[0].node.categories.map(document => (
                        <button className="card-btn">{document.name}</button>
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
                    <div className="cardrel-footer">
                      <div className="right">
                        <div className="colorOrange">
                          <div className="card-color">
                            <h2>By</h2>
                            <h1>
                              {data.allStrapiBlogs.edges[0].node.author.firstname}{" "}
                              {data.allStrapiBlogs.edges[0].node.author.lastname}
                            </h1>
                          </div>
                        </div>
                        <p>{data.allStrapiBlogs.edges[0].node.published_at.slice(0, 10)}</p>
                      </div>
                      <div className="left">
                        <Link to="/article/">
                          <h1
                            onMouseEnter={addUnderline}
                            onMouseLeave={remUnderline}
                          >
                            READ MORE
                          </h1>
                        </Link>
                        <Link to="/article/">
                          <i className="large arrow right icon"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      />
    </>
  )
}

export default RelatedNew
