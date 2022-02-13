import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"
import Seo from "../components/seo"

import Layout from '../components/layout'


const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  const title = `tag: ${tag}`
  return (
    <Layout location={location} title={title}>
      <Seo
        title={tag}
      />
      <div>
	<h1 class ="text-xl font-semibold text-gray-700 capitalize dark:text-white my-2">{tagHeader}</h1>
	<ul >
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const { title } = node.frontmatter
            return (
              <li className="m-12" key={slug}>
		            <Link className="post-list-item" to={slug}>{title}</Link>
              </li>
            )
          })}
	</ul>
	{/*
            This links to a page that does not yet exist.
            You'll come back to it!
          */}
	<Link to="/tags">All tags</Link><br/>
      </div>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD")
            tags
            description
            hero {
              publicURL
            }
          }
        }
      }
    }
  }
`