import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Profile from "../components/profile"
import Share from "../components/share"

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
                      __html: post.frontmatter.tags || post.excerpt,
                    }}
                    itemProp="tags"
                  />
          </section>
        </header>
          <img className="object-contain h-48 w-full"
          src={post.frontmatter.hero.publicURL} 
          alt="SVGicon"/>
        <div class=" flex flex-wrap">
          <div class="p-2 md:w-4/5 flex flex-col">
              {/* 目次 */}
              <div className="bg-gray-100 m-10 mb-20 p-8 rounded-md border-4 border-gray-500 ">
                <div className = "text-2xl font-semibold pb-8">目次</div>
                <div className="leading-6" dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />
              </div>
              {/* ここからブログ本文 */}
              <section class="markdown"
                dangerouslySetInnerHTML={{ __html: post.html }}
                itemProp="articleBody"
              />
              {/* ここまで */}
          </div>
          <div class="flex w-1/5 p-2 mt-12 self-start rounded-sm shadow-2xl bg-white">
            <Profile />
          </div>
        </div>
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <Share
        title={post.frontmatter.title}
        url={`${data.site.siteMetadata.siteUrl}${location.pathname}`}
        description={post.excerpt}
      />
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
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents(
        absolute: false
        pathToSlugField: "frontmatter.path"
        maxDepth: 3
      )
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
