// const path = require(`path`);

// const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
//   // Query for nodes to use in creating pages.
//   resolve(
//     graphql(request).then(result => {
//       if (result.errors) {
//         reject(result.errors)
//       }
      
//       return result;
//     })
//   )
// });

// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions;
  
// //   const getArticles = makeRequest(graphql, `
// //     {
// //       allStrapiBlogs {
// //           edges {
// //               node {
// //                   id
// //               }
// //           }
// //       }
// //     }
// //     `).then(result => {
// //     result.data.allStrapiBlogs.edges.forEach((document) => {
// //       createPage({
// //         path: `/${document.node.id}`,
// //         component: path.resolve(`src/templates/Article.js`),
// //         context: {
// //           id: document.node.id,
// //         },
// //       })
// //     })
// //   });

// //   const getCategories = makeRequest(graphql, `
// //   {
// //     allStrapiCategories {
// //       edges {
// //         node {
// //           id
// //         }
// //       }
// //     }
// //   }
// //   `).then(result => {
// //     result.data.allStrapiCategories.edges.forEach((document) => {
// //       createPage({
// //         path: `/${document.node.id}`,
// //         component: path.resolve(`src/templates/Categories.js`),
// //         context: {
// //           id: document.node.id,
// //         },
// //       })
// //     })
// //   });

//   const getAuthors = makeRequest(graphql, `
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
//     result.data.allStrapiBlogs.edges.forEach(({ node }) => {
//       createPage({
//         path: `/article/${node.id}`,
//         component: path.resolve(`src/Article/internal/FirstDeskpart`),
//         context: {
//           id: node.id,
//         },
//       })
//     })
//   });
  
//   return Promise.all([
//     getArticles,
//     getCategories,
//     getAuthors
//   ])
// };