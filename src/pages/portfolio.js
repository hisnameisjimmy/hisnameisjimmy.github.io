import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import { getImage } from "gatsby-plugin-image";
import PortfolioSummary from '../components/portfolio-summary';

const Portfolio = ({data}) => {
  return (
    <Layout>
      <Seo 
        title="Jimmy Hooker's Portfolio"
      />
      <ul className="sm:space-y-12 sm:space-y-0 sm:-mt-4 lg:gap-x-8 lg:space-y-0 max-w-4xl mx-auto">
        {
          data.allMdx.nodes.map((node) => 
            <PortfolioSummary 
              key={node.id} 
              href={node.slug} 
              image={node.frontmatter.image ? getImage(node.frontmatter.image.childImageSharp) : ""} 
              image_alt={node.frontmatter.image_alt} 
              title={node.frontmatter.title} 
              summary={node.summary} 
              link_text="Learn More" 
            />
          )
        }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
        sort: {fields: frontmatter___date, order: DESC}
        filter: {frontmatter: {post_type: {eq: "portfolio"}}}
      ) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            image: callout_image {
              childImageSharp {
                gatsbyImageData
              }
            }
            image_alt: title
          }
          id
          slug
          summary: excerpt(pruneLength: 200)
        }
    }
  }
`

export default Portfolio;