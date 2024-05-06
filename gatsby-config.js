require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL,
    title: 'Jimmy Hooker',
    description: "Jimmy Hooker's inane ramblings",
    author: 'Jimmy Hooker',
    keywords: ['Jimmy Hooker', 'San Francisco', 'Software'],
    image: '/opengraph-default.png',
    twitterUsername: '@hisnameisjimmy',
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-twitter`,
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-4HPC5TT803'],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                const featuredImageUrl = edge.node.frontmatter.featured_image
                  ? site.siteMetadata.siteUrl +
                    edge.node.frontmatter.featured_image.publicURL
                  : null;

                return {
                  title: edge.node.frontmatter.title,
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + '/blog/' + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + '/blog/' + edge.node.slug,
                  enclosure: featuredImageUrl
                    ? { url: featuredImageUrl }
                    : undefined,
                  custom_elements: [
                    {
                      'content:encoded': edge.node.html
                        // Fix image paths to be absolute:
                        .replace(
                          /<img ([^>]*?)src="\/static\//g,
                          `<img $1src="${site.siteMetadata.siteUrl}/static/`,
                        )
                        // Remove srcSet attributes explicitly:
                        .replace(/srcSet="[^"]*"/g, '')
                        // Remove sizes attributes explicitly:
                        .replace(/sizes="[^"]*"/g, '')
                        // Cleanup: Remove unnecessary spaces between attributes:
                        .replace(
                          /<img (\s+[^>]+)>/g,
                          (match, p1) =>
                            `<img ${p1.trim().replace(/\s{2,}/g, ' ')}>`,
                        )
                        // Optional: Standardize width for all images in the RSS:
                        .replace(/<img /g, '<img width="1200" ')
                        .trim(),
                    },
                  ],
                };
              });
            },
            query: `
              {
                allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {post_type: {eq: "blog"}}}) {
                  edges {
                    node {
                      excerpt
                      body
                      slug
                      html
                      frontmatter {
                        title
                        date
                        featured_image {
                          publicURL
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Jimmy Hooker's RSS Feed",
            image_url: process.env.SITE_URL + '/icon.png',
          },
        ],
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    `gatsby-remark-images`,
    `gatsby-remark-images-medium-zoom`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        plugins: [`gatsby-remark-images`, `gatsby-remark-images-medium-zoom`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`,
            options: {},
          },
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `portfolio`,
        path: `${__dirname}/portfolio/`,
      },
    },
  ],
};
