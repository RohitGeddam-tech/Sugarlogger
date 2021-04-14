import React from "react"
import { Dropdown } from "semantic-ui-react"
import { Link } from "gatsby"

const GenresNav = ({ NavLinks, isMobile }) => {
  return (
    <nav className={isMobile ? "genres-nav" : "large-genresnav"}>
      <ul className="overflow-links">
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
        <li>
          <div className="relative-drop">
            <Dropdown className="navdrop" text="More Categories">
              <Dropdown.Menu>
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
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default GenresNav
