const path = require(`path`)
const { create } = require("domain")
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const FeaturePageTemplate = path.resolve("./src/components/components/SecondPage.js")

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
              firstname
              lastname
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

  const FeaturePages = result.data.allStrapiCategories.edges
  FeaturePages.forEach((FeaturePage) => {
    createPage({
      path: `/article/${FeaturePage.node.name}`,
      component: FeaturePageTemplate,
      context: {
        data: result.data,
        pageData: FeaturePage,
      },
    })
  })
}

// const path = require(`path`)
// const { create } = require("domain")
// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions
//   const FeaturePageTemplate = path.resolve("./src/components/Article/FirstDesk.js")

//   const result = await graphql(`
//     query dynamicpages {
//       allStrapiBlogs {
//         edges {
//           node {
//             id
//             title
//             description
//             image {
//               childImageSharp {
//                 fluid {
//                   src
//                 }
//               }
//             }
//             categories {
//               name
//             }
//             author {
//               firstname
//               lastname
//             }
//             published_at
//             strapiId
//           }
//         }
//       }
//       allStrapiCategories {
//         edges {
//           node {
//             id
//             name
//             blogs {
//               id
//               title
//               description
//               image {
//                 childImageSharp {
//                   fluid {
//                     src
//                   }
//                 }
//               }
//               published_at
//               tag
//               author
//             }
//           }
//         }
//       }
//     }
//   `)
//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }

//   const FeaturePages = result.data.allStrapiBlogs.edges
//   console.log(FeaturePages)
//   FeaturePages.forEach((FeaturePage) => {
//     createPage({
//       path: `/article/${FeaturePage.node.id}`,
//       component: FeaturePageTemplate,
//       context: {
//         id: FeaturePage.node.id,
//         data: result.data,
//         pageData: FeaturePage,
//       },
//     })
//   })
// }

// const path = require(`path`);

// const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
//   // Query for article nodes to use in creating pages.
//   resolve(
//     graphql(request).then(result => {
//       if (result.errors) {
//         reject(result.errors)
//       }

//       return result;
//     })
//   )
// });


// // Implement the Gatsby API “createPages”. This is called once the
// // data layer is bootstrapped to let plugins create pages from data.
// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions;

//   const getArticles = makeRequest(graphql, `
//     {
//       allStrapiBlogs {
//         edges {
//           node {
//             id
//           }
//         }
//       }
//     }
//     `).then(result => {
//     // Create pages for each article.
//     result.data.allStrapiBlogs.edges.forEach(({ node }) => {
//       createPage({
//         path: `/article/${node.id}`,
//         component: path.resolve(`./src/components/Article/FirstDesk.js`),
//         context: {
//           id: node.id,
//         },
//       })
//     })
//   });

//   // Queries for articles and authors nodes to use in creating pages.
//   return Promise.all([
//     getArticles,
//   ])
// };