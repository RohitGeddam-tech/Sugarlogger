import React, { useState } from "react"
import { Dropdown } from "semantic-ui-react"
import { Link } from "gatsby"

const GenresNav = ({ NavLinks, isMobile }) => {
  const [clicked, setClicked] = useState(false)

  const dropdown = clicked ? "new-drop" : "none-drop"

  return (
    <nav className={isMobile ? "genres-nav" : "large-genresnav"}>
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
            onClick={() => {
              setClicked(!clicked)
            }}
          >
            <button>More Categories</button>
            <div className={dropdown}>
              <ul>
                {NavLinks.map(doc => (
                  <li>
                    <Link to={doc.links}>
                      <Dropdown.Item
                        className="genres-droplink"
                        text={doc.name}
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
