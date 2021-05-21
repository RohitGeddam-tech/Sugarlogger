import React from "react"
import "../css/Firstarticle.css"
import FirstDeskpart from "./FirstDeskpart"
import SecondPart from "./SecondPart"
import Related from "./Related"
import Comments from "./Comments"
import ViewComments from "./View"
import banner from "../images/banner.png"
import blog from "../images/blog.png"
import mint1 from "../images/Mint1.png"
import mint2 from "../images/Mint2.png"
import mint3 from "../images/Mint4.png"
import sleep from "../images/Sleep.png"

const Secondarray = [
  {
    id: "1",
    title: "Be Physically Active Each Day",
    text:
      "One step to living a healthier lifestyle is to be physically active every day. It’s not enough to work out once in a while, especially if you have a sedentary job. You must find activities that get your heart rate up and challenge your body and muscles. There are many ways to stay fit including taking cardio classes, joining a gym, and weight lifting. Make sure you fuel up with healthy smoothies that have protein-rich ingredients for a faster recovery time. You’ll feel so much better and will shed unwanted pounds when you exercise routinely.",
    image: [blog],
    meta: "Image Credits to photostock.com",
  },
  {
    id: "2",
    title: "Make Wise Food Choices",
    text:
      "It’s also in your best interest to make wise food choices and to consume a healthy diet overall. What you put in your body has an impact on your energy levels and overall mood. You may find that when you eat healthily that you have less anxiety and feel fuller faster. Drink plenty of water to stay hydrated and stay away from refined sugar, bad fats, and eating a lot of carbohydrates. Focus on putting foods in your body that provide you with the fuel you need to get through your days such as fruits, vegetables, and lean proteins.",
    image: [mint1, mint2, mint3, blog, sleep],
  },
  {
    id: "3",
    title: "Get Plenty Of Rest And Sleep",
    text:
      "Sleep is essential to you being able to function to the best of your ability at home and work. Get plenty of sleep and rest to help you live a healthier lifestyle. There are so many negative consequences of not getting enough sleep that it should be a top priority for you. You’ll wake up feeling ready to seize the day and will be able to think more clearly and concentrate better when you’re well-rested. Find a relaxing bedtime routine and configure your bedroom for optimal sleep to help you achieve this goal.",
    image: [blog, mint1, sleep],
    meta: "Another caption will come here",
  },
]

const Articlebox = [
  {
    id: "1",
    image: banner,
    buttonname: "DietFood",
    btnname: "Fitness",
    Title: "7 Health Food To Eat",
    para:
      "Lorem ipsum dolor sit amet, consectetur aipiscing elit, sed do eiusmod tempor ut labore et dolore ut labore et dolore.",
    by: "Kiran Patil",
    date: "26 January, 2021",
    newbtn: "read more",
  },
]

const Relatedbox = [
  {
    id: "1",
    image: banner,
    buttonname: "DietFood",
    btnname: "Fitness",
    Title: "7 Health Food To Eat",
    para:
      "Lorem ipsum dolor sit amet, consectetur aipiscing elit, sed do eiusmod tempor ut labore et dolore ut labore et dolore.",
    by: "Kiran Patil",
    date: "26 January, 2021",
    newbtn: "read more",
    meta: "Image Credits to photostock.com",
  },
  {
    id: "2",
    image: banner,
    buttonname: "DietFood",
    btnname: "Fitness",
    Title: "7 Health Food To Eat",
    para:
      "Lorem ipsum dolor sit amet, consectetur aipiscing elit, sed do eiusmod tempor ut labore et dolore ut labore et dolore.",
    by: "Kiran Patil",
    date: "26 January, 2021",
    newbtn: "read more",
  },
  {
    id: "3",
    image: banner,
    buttonname: "DietFood",
    btnname: "Fitness",
    Title: "7 Health Food To Eat",
    para:
      "Lorem ipsum dolor sit amet, consectetur aipiscing elit, sed do eiusmod tempor ut labore et dolore ut labore et dolore.",
    by: "Kiran Patil",
    date: "26 January, 2021",
    newbtn: "read more",
    meta: "Another caption will come here",
  },
]

const FirstDesk = () => {
  return (
    <>
      <div className="noad">
        <div className="ad">
          <h1>AD</h1>
        </div>
      </div>
      <div className="article-desk">
        <div className="articledesk-container">
          <div className="article-left">
            <FirstDeskpart Articlearray={Articlebox} />
            <div className="diviider"></div>
            <SecondPart Secondarray={Secondarray} />
            <div className="diviider"></div>
            <div className="commentbox">
              <h1>Add a Comment</h1>
              <Comments />
            </div>
            <div className="diviider"></div>
            <div className="commentbox">
              <h1>View Comments</h1>
              <ViewComments />
            </div>
            <div className="diviider"></div>
            <Related Relatedbox={Relatedbox} />
          </div>
          <div className="article-right">
            <div className="adbox">
              <div className="ad">
                <h1>AD</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FirstDesk

// const FirstDesk = () => {
//   return (
//     <>
//       <div className="noad">
//         <div className="ad">
//           <h1>AD</h1>
//         </div>
//       </div>
//       <div className="article-desk">
//         <div className="articledesk-container">
//           <div className="article-left">
//             <div className="artdeskcard" key={id}>
//               <div className="artdeskboxcard">
//                 <div className="artdesk-cardimage">
//                   <img src={image.childImageSharp.fluid.src} alt="banner" />
//                 </div>
//                 <div className="cardinfo">
//                   <div className="card-start" style={{ paddingTop: "10px" }}>
//                     <div className="card-genre">
//                       {categories.map(doc => (
//                         <button className="card-btn">{doc.name}</button>
//                       ))}
//                     </div>
//                     <div className="cardartdesk-detail">
//                       <h1>{title}</h1>
//                       <p>{description}</p>
//                     </div>
//                   </div>
//                   <div className="iconcard-details">
//                     <div className="cardart-footer">
//                       <div className="card-color">
//                         <h2>By</h2>
//                         <h1>
//                           {author.firstname} {author.lastname}
//                         </h1>
//                       </div>
//                       <p>on {published_at.slice(0, 10)}</p>
//                     </div>
//                   </div>
//                   <div className="articledesk-bottom">
//                     <h1> Share : </h1>
//                     <div className="article-icons">
//                       <Link to="/page-2/">
//                         <i className="big facebook icon"></i>
//                       </Link>
//                       <Link to="/page-2/">
//                         <i className="big instagram icon"></i>
//                       </Link>
//                       <Link to="/page-2/">
//                         <i className="big twitter square icon"></i>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="diviider"></div>
//             <div className="article-container">
//               <div className="second-part">
//                 {content.map(doc => (
//                   <ol>
//                     <li>
//                       <h1>
//                         {doc.id}. {doc.heading}
//                       </h1>
//                       <p>{doc.content}</p>
//                       {doc.images.length === 1 ? (
//                         <>
//                           <div className="images4">
//                             {doc.images.slice(0, 1).map(mark => (
//                               <>
//                                 {mark.image === null ? (
//                                   <div className="nodisplay"></div>
//                                 ) : (
//                                   <img
//                                     src={mark.image.childImageSharp.fluid.src}
//                                     alt="multiple"
//                                   />
//                                 )}
//                               </>
//                             ))}
//                           </div>
//                         </>
//                       ) : null}
//                       {doc.images.length === 2 ? (
//                         <>
//                           <div className="images5">
//                             {doc.images.slice(0, 2).map(mark => (
//                               <>
//                                 {mark.image === null ? (
//                                   <div className="nodisplay"></div>
//                                 ) : (
//                                   <img
//                                     src={mark.image.childImageSharp.fluid.src}
//                                     alt="multiple"
//                                   />
//                                 )}
//                               </>
//                             ))}
//                           </div>
//                         </>
//                       ) : null}
//                       {doc.images.length === 3 ? (
//                         <>
//                           <div className="images3">
//                             {doc.images.slice(0, 3).map(mark => (
//                               <>
//                                 {mark.image === null ? (
//                                   <div className="nodisplay"></div>
//                                 ) : (
//                                   <img
//                                     src={mark.image.childImageSharp.fluid.src}
//                                     alt="multiple"
//                                   />
//                                 )}
//                               </>
//                             ))}
//                           </div>
//                         </>
//                       ) : null}
//                       {doc.images.length === 4 ? (
//                         <>
//                           <div className="images3">
//                             {doc.images.slice(0, 3).map(mark => (
//                               <>
//                                 {mark.image === null ? (
//                                   <div className="nodisplay"></div>
//                                 ) : (
//                                   <img
//                                     src={mark.image.childImageSharp.fluid.src}
//                                     alt="multiple"
//                                   />
//                                 )}
//                               </>
//                             ))}
//                           </div>
//                           <div className="images4">
//                             {doc.images.slice(3, 4).map(mark => (
//                               <>
//                                 {mark.image === null ? (
//                                   <div className="nodisplay"></div>
//                                 ) : (
//                                   <img
//                                     src={mark.image.childImageSharp.fluid.src}
//                                     alt="multiple"
//                                   />
//                                 )}
//                               </>
//                             ))}
//                           </div>
//                         </>
//                       ) : null}
//                       {doc.images.length === 5 ? (
//                         <>
//                           <div className="images3">
//                             {doc.images.slice(0, 3).map(mark => (
//                               <>
//                                 {mark.image === null ? (
//                                   <div className="nodisplay"></div>
//                                 ) : (
//                                   <img
//                                     src={mark.image.childImageSharp.fluid.src}
//                                     alt="multiple"
//                                   />
//                                 )}
//                               </>
//                             ))}
//                           </div>
//                           <div className="images5">
//                             {doc.images.slice(3, 5).map(mark => (
//                               <>
//                                 {mark.image === null ? (
//                                   <div className="nodisplay"></div>
//                                 ) : (
//                                   <img
//                                     src={mark.image.childImageSharp.fluid.src}
//                                     alt="multiple"
//                                   />
//                                 )}
//                               </>
//                             ))}
//                           </div>
//                         </>
//                       ) : null}
//                       {doc.images.length === 6 ? (
//                         <>
//                           <div className="images3">
//                             {doc.images.slice(0, 3).map(mark => (
//                               <>
//                                 {mark.image === null ? (
//                                   <div className="nodisplay"></div>
//                                 ) : (
//                                   <img
//                                     src={mark.image.childImageSharp.fluid.src}
//                                     alt="multiple"
//                                   />
//                                 )}
//                               </>
//                             ))}
//                           </div>
//                           <div className="images3">
//                             {doc.images.slice(3, 6).map(mark => (
//                               <>
//                                 {mark.image === null ? (
//                                   <div className="nodisplay"></div>
//                                 ) : (
//                                   <img
//                                     src={mark.image.childImageSharp.fluid.src}
//                                     alt="multiple"
//                                   />
//                                 )}
//                               </>
//                             ))}
//                           </div>
//                         </>
//                       ) : null}
//                       {doc.images.map(newer =>
//                         newer.info === "" ? (
//                           <div style={{ display: "none" }}></div>
//                         ) : (
//                           <span>{newer.info}</span>
//                         )
//                       )}
//                     </li>
//                   </ol>
//                 ))}
//               </div>
//               <div className="aligndesk-bottom">
//                 <div className="articledesk-bottom">
//                   <h1> Share : </h1>
//                   <div className="article-icons">
//                     <Link to="/page-2/">
//                       <i className="big facebook icon"></i>
//                     </Link>
//                     <Link to="/page-2/">
//                       <i className="big instagram icon"></i>
//                     </Link>
//                     <Link to="/page-2/">
//                       <i className="big twitter square icon"></i>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="diviider"></div>
//             <div className="commentbox">
//               <h1>Add a Comment</h1>
//               <Comments />
//             </div>
//             <div className="diviider"></div>
//             <div className="commentbox">
//               <h1>View Comments</h1>
//               <ViewComments />
//             </div>
//             <div className="diviider"></div>
//             <div className="related-heading">
//               <h1>Related Articles</h1>
//             </div>
//             <Related />
//           </div>
//           <div className="article-right">
//             <div className="adbox">
//               <div className="ad">
//                 <h1>AD</h1>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default FirstDesk
