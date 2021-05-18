// import * as React from "react"
// import { Link, StaticQuery, graphql } from "gatsby"
// import banner from "../../images/banner.png"
// import "semantic-ui-css/semantic.min.css"
// import "../css/FirstPage.css"
// import addUnderline from "../../utils/addUnderline"
// import remUnderline from "../../utils/remUnderline"
// import FirstDeskpart from "../Article/internal/FirstDeskpart"

// const FirstPage = ({ data }) => {
//   return (
//     <>
//       <div className="banner" key={data.allStrapiBlogs.edges[1].id}>
//         <div className="banner-container">
//           <Link to="/article/" className="bannerbox">
//             <div className="bannerimg">
//               <img
//                 src={
//                   data.allStrapiBlogs.edges[1].image.childImageSharp.fluid.src
//                 }
//                 alt="banner"
//               />
//             </div>
//             <div className="banner-detail">
//               <div className="banner-top">
//                 <div className="banner-title">
//                   <h1>{data.allStrapiBlogs.edges[1].tag.name}</h1>
//                 </div>
//                 <div className="diviiider"></div>
//                 <div className="Genres">
//                   {data.allStrapiBlogs.edges[1].categories.map(doc => (
//                     <button className="bannerbtn">{doc.name}</button>
//                   ))}
//                 </div>
//                 <div className="banner-data">
//                   <h1>{data.allStrapiBlogs.edges[1].title}</h1>
//                   <p>{data.allStrapiBlogs.edges[1].description}</p>
//                 </div>
//               </div>
//               <div className="banner-footer">
//                 <div className="right">
//                   <div className="colorOrange">
//                     <h2>By </h2>
//                     <h1>
//                       {data.allStrapiBlogs.edges[1].author.firstname}{" "}
//                       {data.allStrapiBlogs.edges[1].author.lastname}
//                     </h1>
//                   </div>
//                   <p>
//                     {data.allStrapiBlogs.edges[1].published_at.slice(0, 10)}
//                   </p>
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

// export const query = graphql`
//   query varianttrialquery {
//     allStrapiBlogs {
//       edges {
//         node {
//           id
//           title
//           description
//           image {
//             childImageSharp {
//               fluid {
//                 src
//               }
//             }
//           }
//           categories {
//             name
//           }
//           author {
//             firstname
//             lastname
//           }
//           published_at
//           strapiId
//         }
//       }
//     }
//   }
// `
