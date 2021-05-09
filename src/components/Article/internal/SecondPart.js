// import React, { useState } from "react"
// import { Link } from "gatsby"
// import Secondpart_art from "../../../utils/Secondpart_art"

// const SecondPart = ({ Secondarray }) => {
//   return (
//     <>
//       <div className="article-container">
//         <div className="second-part">
//           {data.strapiBlogs.content.map(doc => (
//             <ol>
//               <li>
//                 <h1>
//                   {doc.id}. {doc.heading}
//                 </h1>
//                 <p>{doc.content}</p>
//                 {doc.images.length === 1 ? (
//                   <>
//                     <div className="images4">
//                       {doc.images.slice(0, 1).map(mark => (
//                         <img
//                           src={mark.image.childImageSharp.fluid.src}
//                           alt="multiple"
//                         />
//                       ))}
//                     </div>
//                   </>
//                 ) : null}
//                 {doc.images.length === 2 ? (
//                   <>
//                     <div className="images5">
//                       {doc.images.slice(0, 2).map(mark => (
//                         <img
//                           src={mark.image.childImageSharp.fluid.src}
//                           alt="multiple"
//                         />
//                       ))}
//                     </div>
//                   </>
//                 ) : null}
//                 {doc.images.length === 3 ? (
//                   <>
//                     <div className="images3">
//                       {doc.images.slice(0, 3).map(mark => (
//                         <img
//                           src={mark.image.childImageSharp.fluid.src}
//                           alt="multiple"
//                         />
//                       ))}
//                     </div>
//                   </>
//                 ) : null}
//                 {doc.images.length === 4 ? (
//                   <>
//                     <div className="images3">
//                       {doc.images.slice(0, 3).map(mark => (
//                         <img
//                           src={mark.image.childImageSharp.fluid.src}
//                           alt="multiple"
//                         />
//                       ))}
//                     </div>
//                     <div className="images4">
//                       {doc.images.slice(3, 4).map(mark => (
//                         <img
//                           src={mark.image.childImageSharp.fluid.src}
//                           alt="multiple"
//                         />
//                       ))}
//                     </div>
//                   </>
//                 ) : null}
//                 {doc.images.length === 5 ? (
//                   <>
//                     <div className="images3">
//                       {doc.images.slice(0, 3).map(mark => (
//                         <img
//                           src={mark.image.childImageSharp.fluid.src}
//                           alt="multiple"
//                         />
//                       ))}
//                     </div>
//                     <div className="images5">
//                       {doc.images.slice(3, 5).map(mark => (
//                         <img
//                           src={mark.image.childImageSharp.fluid.src}
//                           alt="multiple"
//                         />
//                       ))}
//                     </div>
//                   </>
//                 ) : null}
//                 {doc.images.length === 6 ? (
//                   <>
//                     <div className="images3">
//                       {doc.images.slice(0, 3).map(mark => (
//                         <img
//                           src={mark.image.childImageSharp.fluid.src}
//                           alt="multiple"
//                         />
//                       ))}
//                     </div>
//                     <div className="images3">
//                       {doc.images.slice(3, 6).map(mark => (
//                         <img
//                           src={mark.image.childImageSharp.fluid.src}
//                           alt="multiple"
//                         />
//                       ))}
//                     </div>
//                   </>
//                 ) : null}
//                 {doc.images.map(newer =>
//                   newer.info === "" ? (
//                     <div style={{ display: "none" }}></div>
//                   ) : (
//                     <span>{newer.info}</span>
//                   )
//                 )}
//               </li>
//             </ol>
//           ))}
//         </div>
//         <div className="aligndesk-bottom">
//           <div className="articledesk-bottom">
//             <h1> Share : </h1>
//             <div className="article-icons">
//               <Link to="/page-2/">
//                 <i className="big facebook icon"></i>
//               </Link>
//               <Link to="/page-2/">
//                 <i className="big instagram icon"></i>
//               </Link>
//               <Link to="/page-2/">
//                 <i className="big twitter square icon"></i>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default SecondPart
