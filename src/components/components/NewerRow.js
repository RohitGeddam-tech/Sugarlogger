import React from "react"

const NewerRow = () => {
  const [newArt, setNewArt] = useState("")
  const data = useStaticQuery(graphql`
    query latestmobquery {
      allStrapiBlogs {
        edges {
          node {
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
            strapiId
          }
        }
      }
    }
  `)
  return (
    <>
      <div style={{ display: "none" }}>
        <FirstDesk data={data} />
      </div>
      {data.allStrapiBlogs.edges
        // .reverse()
        .slice(pageVisited, pageCalci)
        .map((doc, index) => {
          return (
            <div className="inherit-boxcard" key={index}>
              <Link to={`/article/`} className="boxcard" key={doc.node.id}>
                <div className="cardimage">
                  <img
                    src={doc.node.image.childImageSharp.fluid.src}
                    alt="banner"
                  />
                </div>
                <div className="cardinfo">
                  <div className="card-start">
                    <div className="card-genre">
                      {doc.node.categories.map(document => (
                        <button className="card-btn">{document.name}</button>
                      ))}
                    </div>
                    <div className="card-detail">
                      <h1>{doc.node.title}</h1>
                      <p>{doc.node.description}</p>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="card-left">
                      <h1>
                        By{" "}
                        <h2>
                          {doc.node.author.firstname} {doc.node.author.lastname}
                        </h2>
                      </h1>
                      <p>{doc.node.published_at.slice(0, 10)}</p>
                    </div>
                    <div className="card-right">
                      <Link to={`/article`}>
                        <h1
                          onMouseEnter={addUnderline}
                          onMouseLeave={remUnderline}
                        >
                          Read More
                        </h1>
                      </Link>
                      <Link to="/article/">
                        <i className="large arrow right icon"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="bottomgap"></div>
                </div>
              </Link>
            </div>
          )
        })}
    </>
  )
}

export default NewerRow
