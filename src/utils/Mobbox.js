import * as React from "react"
import { Link, StaticQuery, graphql, useStaticQuery } from "gatsby"
import addUnderline from "./addUnderline"
import remUnderline from "./remUnderline"

// const Mobbox = ({
//   id,
//   image,
//   buttonname,
//   btnname,
//   newbtn,
//   Title,
//   para,
//   by,
//   date,
// }) => {
//   return (
//     <Link to="/article/" className="Mobobcard" key={id}>
//       <div className="Mobboxcard">
//         <div className="cardimage">
//           <img src={image} alt="banner" />
//         </div>
//         <div className="cardinfo">
//           <div className="card-start">
//             <div className="card-genre">
//               <button className="card-btn">{buttonname}</button>
//               <button className="card-btn">{btnname}</button>
//             </div>
//             <div className="card-detail">
//               <h1>{Title}</h1>
//               <p>{para}</p>
//             </div>
//           </div>
//           <div className="card-footer">
//             <div className="card-left">
//               <h1>
//                 By <h2>{by}</h2>
//               </h1>
//               <p>{date}</p>
//             </div>
//             <div className="card-right">
//               <Link to="/article/">
//                 <h1 onMouseEnter={addUnderline} onMouseLeave={remUnderline}>
//                   {newbtn}
//                 </h1>
//               </Link>
//               <Link to="/article/">
//                 <i className="large arrow right icon"></i>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }

const Mobbox = () => {
  const data = useStaticQuery(graphql`
    query mobilerowquery {
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
  `)
  return (
    <>
      <Link to="/article/" className="Mobobcard" key={data.strapiBlogs.id}>
        <div className="Mobboxcard">
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
                <Link to="/article/">
                  <h1 onMouseEnter={addUnderline} onMouseLeave={remUnderline}>
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
      </Link>
    </>
  )
}

export default Mobbox
