const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    // Generate the base file path
    const fileNode = getNode(node.parent);
    const source = fileNode.sourceInstanceName; // This is set based on the 'name' in gatsby-source-filesystem

    // Initialize a base slug
    let baseSlug = '';

    // Determine the slug prefix based on the sourceInstanceName
    if (source === 'blog') {
      baseSlug = '/blog';
    } else if (source === 'portfolio') {
      baseSlug = '/portfolio';
    } // Add more conditions as needed

    // Generate the slug using Gatsby's createFilePath
    const slug = createFilePath({ node, getNode, basePath: `src/${source}` });

    // Combine the base slug and the generated slug
    const fullPath = `${baseSlug}${slug}`;

    // Create the new slug field
    createNodeField({
      node,
      name: 'slug',
      value: fullPath,
    });
  }
};
