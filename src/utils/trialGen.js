import React, { useState, useRef, useEffect, useCallback } from "react"
import { Dropdown } from "semantic-ui-react"
import { Link } from "gatsby"

const GenresNav = ({ NavLinks, isMobile }) => {
  const [clicked, setClicked] = useState(false)

  // const drop = () => { document.querySelector('.parent').addEventListener('change', function(){
  //   let item = this
  //   let subItem = ('new-drop', item)
  //   let itempos = item.position();
  //   return item, subItem, itempos
  // })}

  // const {item, subItem, itempos} = drop

  // const styles = {
  //   left: itempos - Math.round(item.outerwidth() * 0)
  // }

  // const drop = ({
  //   top: menuItemPos.top,
  //   left: menuItemPos.left - Math.round($menuItem.outerWidth() * 0)
  // });

  const locref = useRef(null)

  const isInView = () => {
    if (!locref.current) return
    if (locref.current.getBoundingClientRect() || null) {
      const rect = locref.current.getBoundingClientRect()
      const leftPos = rect.left - locref.current.offsetWidth * 0.55
      console.log("rect", rect.left)
      console.log("rect oofestwidth", locref.current.offsetWidth)
      console.log("left", leftPos)
      return leftPos
    } else {
      return null
    }
  }

  // const isInView = () => {
  //   setClicked(!clicked)
  //   const rect = locref.current.getBoundingClientRect()
  //   console.log('rect',rect.left)
  //   return {
  //     backgroundColor:'blue',
  //     left: rect.left
  //   }
  // }

  const [inView, setInView] = useState(false)

  // // console.log('isinview function',isInView())

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

  const Drop = ({ newDrop }) => {
    return (
      <div className={newDrop} style={positionDrop}>
        <ul>
          {NavLinks.map(doc => (
            <li>
              <Link to={doc.links}>
                <Dropdown.Item className="genres-droplink" text={doc.name} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  const Genres = () => {
    const dropdown = clicked ? "new-drop" : "none-drop"
    return (
      <nav className={isMobile ? "large-genresnav" : "genres-nav"}>
        <div className="overflow-links">
          <ul>
            {NavLinks.map(document => (
              <li>
                <Link
                  to={document.links}
                  activeClassName="linkactive"
                  className="genres-navlinks"
                >
                  {document.name}
                </Link>
              </li>
            ))}
            <li
              className="parent"
              ref={locref}
              onClick={() => {
                setClicked(!clicked)
              }}
              // onClick={isInView()}
            >
              <button>More Categories</button>
              <Drop newDrop={dropdown} />
            </li>
          </ul>
        </div>
      </nav>
    )
  }
  const Reverse = () => {
    const dropdown = clicked ? "reverse-drop" : "none-drop"
    return (
      <>
        <nav className={isMobile ? "large-genresnav" : "genres-nav"}>
          <div className="overflow-links">
            <ul>
              {NavLinks.map(document => (
                <li>
                  <Link
                    to={document.links}
                    activeClassName="linkactive"
                    className="genres-navlinks"
                  >
                    {document.name}
                  </Link>
                </li>
              ))}
              <li
                className="parent"
                ref={locref}
                onClick={() => {
                  setClicked(!clicked)
                }}
                // onClick={isInView()}
              >
                <Drop newDrop={dropdown} />
                <button>More Categories</button>
              </li>
            </ul>
          </div>
        </nav>
      </>
    )
  }

  return <>{View ? <Genres /> : <Reverse />}</>
}

export default GenresNav

{
  /* <div className="drop">
          <select placeholder="drop">
            {NavLinks.map(document => (
                <option>
                  <Link
                  to={document.links}
                  activeClassName="linkactive"
                  className="genres-navlinks"
                >
                  {document.name}
                </Link>
                </option>
            ))}
          </select>
        </div> */
}

{
  /* <li>
          <div className={dropdown}>
            <Dropdown className="navdrop" text="More Categories" onClick={()=>{setClicked(!clicked)}}>
              <Dropdown.Menu>
                {NavLinks.map(doc => (
                  <Link to={doc.links}>
                    <Dropdown.Item
                      className="genres-droplink"
                      text={doc.name}
                    />
                  </Link>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </li> */
}
