const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query content from Contentful
  const result = await graphql(`
    query {
      allContentfulBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error('Error querying Contentful:', result.errors);
  }

  // Create pages from queried content
  const pageTemplate = path.resolve('./src/template/blog-template.js');

  result.data.allContentfulBlog.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: pageTemplate,
      context: {
        slug: node.slug,
      }
    });
  });
};