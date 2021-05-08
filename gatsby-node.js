  
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-template.js`)
  const result = await graphql(`
    {
      blogs: allStrapiBlogs {
        edges {
            node {
                slug
            }
        }
      }
    }
  `)
    
  if (result.errors) {
    throw result.errors;
   }
   const blogs = result.data.blogs.edges;
  blogs.forEach(blog => {
    createPage({
      path: `/blogs/${blog.node.slug}`,
      component: blogPostTemplate,
      context: {
        slug: blog.node.slug,
      },
    })
  })
}
