import React, { useState, useRef, useEffect, useCallback } from "react"
import { Dropdown } from "semantic-ui-react"
import { graphql, Link, useStaticQuery } from "gatsby"

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

  return (
    <nav className={isMobile ? "large-genresnav" : "genres-nav"}>
      <div className="overflow-links">
        <ul>
          {data.allStrapiCategories.edges.slice(0,8).map(document => (
            <li>
              <Link
                to={`/${document.node.name}`}
                activeClassName="linkactive"
                className="genres-navlinks"
              >
                {document.node.name}
              </Link>
            </li>
          ))}
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
                {data.allStrapiCategories.edges.slice(8,16).map(doc => (
                  <li>
                    <Link to={`/${doc.node.name}`}>
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
        </ul>
      </div>
    </nav>
  )
}

export default GenresNav
