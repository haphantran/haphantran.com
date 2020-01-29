const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const projectTemplate = path.resolve("./src/templates/project.js")
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulProject {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  res.data.allContentfulProject.edges.forEach(edge => {
    createPage({
      component: projectTemplate,
      path: `/project/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
