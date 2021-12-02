import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import BlogSummary from "../components/blog-summary";
import { getImage } from "gatsby-plugin-image";

const Guides = ({data}) => {
  return (
    <Layout>
      <Seo 
        title="Jimmy Hooker's Website"
      />
        <ul className="sm:space-y-12 sm:space-y-0 sm:-mt-4 lg:gap-x-8 lg:space-y-0">
          {
            data.allMdx.nodes.map((node) => 
              <BlogSummary 
                key={node.id} 
                href={node.slug} 
                image={node.frontmatter.image ? getImage(node.frontmatter.image.childImageSharp) : ""} 
                image_alt={node.frontmatter.image_alt} 
                title={node.frontmatter.title} 
                summary={node.summary} 
                link_text="Read More" 
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
      filter: {frontmatter: {post_type: {eq: "blog"}}}
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          image: featured_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          image_alt: featured_image_credit
        }
        id
        slug
        summary: excerpt(pruneLength: 200)
      }
    }
  }
`

export default Guides;