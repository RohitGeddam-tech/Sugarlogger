const path = require(`path`)
const { create } = require("domain")
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const CategoryTemplate = path.resolve("./src/Genre/SecondTrial.js")
  const BlogTemplate = path.resolve("./src/Article/Article.js")

  const result = await graphql(`
    query dynamicpages {
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
              username
            }
            content {
              id
              heading
              content
              images {
                image {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
            }
            published_at
            strapiId
          }
        }
      }
      allStrapiCategories {
        edges {
          node {
            id
            name
            blogs {
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
              published_at
              tag
              author
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const CategoryPages = result.data.allStrapiCategories.edges
  CategoryPages.forEach(CategoryPage => {
    createPage({
      path: `/Genre/${CategoryPage.node.id}`,
      component: CategoryTemplate,
      context: {
        data: result.data,
        pageData: CategoryPage,
      },
    })
  })

  const BlogPages = result.data.allStrapiBlogs.edges
  BlogPages.forEach(BlogPage => {
    createPage({
      path: `/article/${BlogPage.node.strapiId}`,
      component: BlogTemplate,
      context: {
        data: result.data,
        pageData: BlogPage,
      },
    })
  })
}
