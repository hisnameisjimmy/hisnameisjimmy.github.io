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
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <ul className="sm:space-y-12 sm:space-y-0 sm:-mt-4 lg:gap-x-8 lg:space-y-0">
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
      </div>
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