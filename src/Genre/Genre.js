import React, { useState, useRef, useEffect, useCallback } from "react"
import { Dropdown } from "semantic-ui-react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "../css/Genres.css"
import SecondPage from "../Home/SecondPage"
import SecondTrial from './SecondTrial'

const NavLinks = [
  {
    name: "Latest",
    links: "/",
  },
  {
    name: "Trending",
    links: "/page-2/",
  },
  {
    name: "Yoga",
    links: "/yoga/",
  },
  {
    name: "Diet Food",
    links: "/diet/",
  },
  {
    name: "Home Remedies",
    links: "/homeRemedies/",
  },
  {
    name: "Fitness",
    links: "/fitness/",
  },
  {
    name: "Diabetes",
    links: "/diabetes/",
  },
  {
    name: "Ayurvedic",
    links: "/ayurvedic/",
  },
]

const GenresNav = () => {
  const [clicked, setClicked] = useState(false)

  const locref = useRef(null)

  const isInView = () => {
    if (!locref.current) return
    if (locref.current.getBoundingClientRect() || null) {
      const rect = locref.current.getBoundingClientRect()
      const leftPos = rect.left - locref.current.offsetWidth * 0
      console.log(leftPos)
      return leftPos
    } else {
      return null
    }
  }

  const [inView, setInView] = useState(false)

  const positionHandler = useCallback(() => {
    setInView(isInView())
  }, [])

  useEffect(() => {
    setInView(isInView())
    window.addEventListener("resize", positionHandler)
    return () => {
      window.removeEventListener("resize", positionHandler)
    }
  }, [positionHandler])

  const positionDrop = inView ? { left: isInView() } : null

  const InView = () => {
    const rect = window.pageYOffset
    return rect >= 0 && rect <= 1300
  }

  const [View, setView] = useState(false)

  const scrollHandler = useCallback(() => {
    setView(InView())
  }, [])

  useEffect(() => {
    setView(InView())
    window.addEventListener("scroll", scrollHandler)
    return () => {
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [scrollHandler])

  const dropdown = clicked ? "new-drop" : "none-drop"

  const dropRev = clicked ? "reverse-drop" : "none-drop"

  const dropup = View ? dropdown : dropRev

  // return (
  //   <>
  //     <div className="genres-bar" style={{marginTop:'20px'}}>
  //       <nav className="genres-nav">
  //         <div className="overflow-links">
  //           <ul>
  //             {NavLinks.map(document => (
  //               <li>
  //                 <Link
  //                   to={document.links}
  //                   activeClassName="linkactive"
  //                   className="genres-navlinks"
  //                 >
  //                   {document.name}
  //                 </Link>
  //               </li>
  //             ))}
  //             <li
  //               className="parent"
  //               ref={locref}
  //               onClick={() => {
  //                 setClicked(!clicked)
  //               }}
  //               onMouseEnter={() => {
  //                 setClicked(true)
  //               }}
  //               onMouseLeave={() => {
  //                 setClicked(false)
  //               }}
  //             >
  //               <button>More Categories</button>
  //               <div className={dropup} style={positionDrop}>
  //                 <ul>
  //                   {NavLinks.map(doc => (
  //                     <li>
  //                       <Link to={doc.links}>
  //                         <Dropdown.Item
  //                           className="genres-droplink"
  //                           text={doc.name}
  //                         />
  //                       </Link>
  //                     </li>
  //                   ))}
  //                 </ul>
  //               </div>
  //             </li>
  //           </ul>
  //         </div>
  //       </nav>
  //     </div>
  //     <SecondPage />
  //   </>
  // )

  const data = useStaticQuery(graphql`
    query categoryquery {
      allStrapiCategories {
        edges {
          node {
            id
            name
            strapiId
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="genres-bar">
        <nav className="genres-nav">
          <div className="overflow-links">
            <ul>
              <li>
                <Link
                  to="/"
                  activeClassName="linkactive"
                  className="genres-navlinks"
                >
                  Home
                </Link>
              </li>
              {data.allStrapiCategories.edges.slice(0, 6).map(document => (
                <li>
                  <Link
                    to={`/Genre/${document.node.id}`}
                    activeClassName="linkactive"
                    className="genres-navlinks"
                  >
                    {document.node.name}
                  </Link>
                </li>
              ))}
              {data.allStrapiCategories.edges.length > 7 ? (
                <li
                  className="parent"
                  ref={locref}
                  onClick={() => {
                    setClicked(!clicked)
                  }}
                  onMouseEnter={() => {
                    setClicked(true)
                  }}
                  onMouseLeave={() => {
                    setClicked(false)
                  }}
                >
                  <button>More Categories</button>
                  <div className={dropup} style={positionDrop}>
                    <ul>
                      {data.allStrapiCategories.edges.slice(7, 14).map(doc => (
                        <li>
                          <Link to={`/Genres/${doc.node.id}`}>
                            <Dropdown.Item
                              className="genres-droplink"
                              text={doc.node.name}
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <div className="nodisplay"></div>
              )}
            </ul>
          </div>
        </nav>
      </div>
      {/* <SecondPage /> */}
      {/* <SecondTrial /> */}
    </>
  )
}

export default GenresNav
