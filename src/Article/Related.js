import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const remUnderline = e => {
  e.target.style.textDecoration = "none"
}
const addUnderline = e => {
  e.target.style.textDecoration = "underline"
}

// const Related = ({ Relatedbox }) => {
//   return (
//     <>
//       <div className="related-heading">
//         <h1>Related Articles</h1>
//       </div>
//       {Relatedbox.map(doc => (
//         <div className="artdeskcard" key={doc.id}>
//           <Link to='/article' className="artrelboxcard">
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
//                 <div className="cardrel-footer">
//                   <div className="right">
//                     <h1>By {doc.by}</h1>
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
//           </Link>
//         </div>
//       ))}
//     </>
//   )
// }

// export default Related

const Related = () => {
  const data = useStaticQuery(graphql`
    query relatedcatquery {
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
            strapiId
          }
        }
      }
    }
  `)

  return (
    <>
      {data.allStrapiBlogs.edges.slice(0, 3).map(doc => (
        <div className="artdeskcard" key={doc.node.id}>
          <Link to={`/article/${doc.node.id}`} className="artrelboxcard">
            <div className="artdesk-cardimage">
              <img src={doc.node.image.childImageSharp.fluid.src} alt="banner" />
            </div>
            <div className="cardinfo">
              <div className="card-start" style={{ paddingTop: "10px" }}>
                <div className="card-genre">
                  {doc.node.categories.map(document => (
                    <button className="bannerbtn">{document.name}</button>
                  ))}
                </div>
                <div className="cardartdesk-detail">
                  <h1>{doc.node.title}</h1>
                  <p>{doc.node.description.slice(0,150)}</p>
                </div>
              </div>
              <div className="iconcard-details">
                {/* <div className="ui avatar image">
                  <h1>KP</h1>
                </div> */}
                <div className="cardrel-footer">
                  <div className="right">
                    <div className="colorOrange">
                      <h2>By </h2>
                      {/* <h1>
                        {doc.node.author.firstname}{" "}
                        {doc.node.author.lastname}
                      </h1> */}
                    </div>
                    <p>{doc.node.published_at.slice(0, 10)}</p>
                  </div>
                  <div className="left">
                    <Link to={`/article/${doc.node.id}`}>
                      <h1
                        onMouseEnter={addUnderline}
                        onMouseLeave={remUnderline}
                      >
                        READ MORE
                      </h1>
                    </Link>
                    <Link to={`/article/${doc.node.id}`}>
                      <i className="large arrow right icon"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  )
}

export default Related