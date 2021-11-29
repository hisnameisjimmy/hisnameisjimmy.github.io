import * as React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import Seo from '../../components/seo'
import ThreeColumn from '../../components/three-column'
import Person from '../../components/person'
import People from "../../components/people"
import Table from "../../components/table"
import { SocialShare } from "../../components/helpers";

const BlogEntry = ({ data }) => {
  const heroImage = getImage(data.mdx.frontmatter.featured_image);
  const open_graph_image = data.mdx.frontmatter.open_graph_image 
    ? data.mdx.frontmatter.open_graph_image.childImageSharp.resize
    : null

  const shortcodes = { 
    ThreeColumn, 
    Person, 
    Table, 
    People
  }

  return (
    <Layout>
      <Seo 
        title={data.mdx.frontmatter.title}
        image={open_graph_image}
      />
      <div className="relative pb-16 bg-white">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg mx-auto">
              <div className="text-2xl sm:text-4xl leading-10 font-bold mt-5 sm:mt-10 mb-5 sm:mb-10 max-w-2xl mx-auto">
                <h1>{data.mdx.frontmatter.title}</h1>
              </div>
              <div className="mt-4 sm:mt-12">
                <GatsbyImage image={heroImage} alt={data.mdx.frontmatter.featured_image_credit} className="object-cover shadow-lg"/>
              </div>
              {data.mdx.frontmatter.featured_image_credit_link ? 
                  (<p className="mt-4 text-center text-base text-gray-400">
                    <a href={data.mdx.frontmatter.featured_image_credit_link} className="underline">
                      {data.mdx.frontmatter.featured_image_credit}
                    </a>
                  </p>)
                  : ""
                }
            <div className="mt-6 sm:mt-12 text-gray-500 prose prose-lg mx-auto">
              <SocialShare url={`${data.site.siteMetadata.siteUrl}${data.mdx.slug}`} message={data.mdx.frontmatter.title}/>
              <MDXProvider components={shortcodes}>
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
              </MDXProvider>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String) {
    mdx(slug: { eq: $slug }, fileAbsolutePath: {regex: "/(/blog/)/"}) {
      body
      slug
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featured_image_credit_link
        featured_image_credit
        featured_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        open_graph_image: featured_image {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export default BlogEntry;
