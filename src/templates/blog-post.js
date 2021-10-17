import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import Image from "../components/image"
import Profile from "../components/profile"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  // const {title, description, hero, date } = data.frontmatter //追加
  // const {title, description, date } = data.frontmatter //追加

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          {/* title */}
          <h1 itemProp="headline" class="text-4xl py-6 font-semibold text-gray-800">{post.frontmatter.title}</h1>
          {/* upload date */}
          <p>{post.frontmatter.date}</p>
          {/*tag*/}
          <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.pagetype || post.excerpt,
                    }}
                    itemProp="pagetype"
                  />
          </section>

        </header>
        {/* ここからブログ本文 */}
        <section class="markdown"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        {/* ここまで */}
        <hr />
        <footer>
          <Bio />
          <Profile />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        pagetype
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
