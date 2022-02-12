import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
// Utilities
import kebabCase from "lodash/kebabCase"


const TagsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="tag list" />
      <article>
	<h2 class ="text-xl font-semibold text-gray-700 capitalize dark:text-white my-2">All Tags</h2>
	<ul>
	  {data.allMarkdownRemark.group.map(tag => (
	    <li key={tag.fieldValue}>
	      <Link className="w-auto text inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-1 px-4 rounded-full" to={`/tags/${kebabCase(tag.fieldValue)}/`}>
		{tag.fieldValue} ({tag.totalCount})
	      </Link>
	    </li>
	  ))}
	</ul>
      </article>
      <Bio />
    </Layout>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      group(field: frontmatter___tags) {
	fieldValue
	totalCount
      }
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            title
            description
          }
        }
      }
    }
  }
`