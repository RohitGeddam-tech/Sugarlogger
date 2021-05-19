import React, { useState, useRef, useEffect, useCallback } from "react"
import SecondTrial from "../components/components/SecondTrial"
import { Dropdown } from "semantic-ui-react"
import { graphql, Link, useStaticQuery } from "gatsby"
import FirstPage from "../components/components/FirstPage"

const GenresNav = ({ NavLinks, isMobile, space, bottom }) => {
  const [clicked, setClicked] = useState(false)

  const locref = useRef(null)

  const isInView = () => {
    if (!locref.current) return
    if (locref.current.getBoundingClientRect() || null) {
      const rect = locref.current.getBoundingClientRect()
      const leftPos = rect.left - locref.current.offsetWidth * 0
      // console.log(leftPos)
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
    return rect >= 150 && rect <= 1300
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

  const [firstClick, setFirstClick] = useState(false)
  const [secondClick, setSecondClick] = useState(false)

  const [newArt, setNewArt] = useState(1)

  const container = secondClick ? "nodisplay" : ""

  const newcontainer = firstClick ? "nodisplay" : ""

  return (
    <>
      <div className={container}>
        <div className={newcontainer}>
          <FirstPage />
        </div>
        <div className="genres-bar">
          <nav className={isMobile ? "large-genresnav" : "genres-nav"}>
            <div className="overflow-links">
              <ul>
                {data.allStrapiCategories.edges.slice(0, 6).map(document => (
                  <li onClick={() => setNewArt(document.node.strapiId)}>
                    <div
                      onClick={()=>setFirstClick(true)}
                      className={
                        document.node.strapiId === newArt
                          ? "linkactive"
                          : "genres-navlinks"
                      }
                    >
                      {document.node.name}
                    </div>
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
                        {data.allStrapiCategories.edges
                          .slice(7, 14)
                          .map(doc => (
                            <li onClick={() => setNewArt(doc.node.strapiId)}>
                              <Link>
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
            {/* <div className="nodisplay"><SecondTrial /></div> */}
            {console.log(newArt)}
          </nav>
        </div>
      </div>
      <SecondTrial
        indNum={newArt}
        clicked={secondClick}
        setClicked={setSecondClick}
      />
    </>
  )
}

export default GenresNav

// export const query = graphql`
//   query categoryquery {
//     allStrapiCategories {
//       edges {
//         node {
//           id
//           name
//           strapiId
//           blogs {
//             id
//             title
//             tag
//             author
//           }
//         }
//       }
//     }
//   }
// `
