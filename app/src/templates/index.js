import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Profile from "../components/profile"
import Tags from "../components/tags"
import Pagenation from "../components/pagination"

import Clocksvg from "../images/clock.svg"

const BlogIndex = ({ data, location,pageContext }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
    <div class=" flex flex-wrap">
    <div class="p-2 mx-16 md:w-4/6 flex flex-col ">
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          return (
            <li class = "rounded-xl shadow-md p-5 bg-white m-5 shadow" key={post.fields.slug}>
              <Link className="post-link" to={post.fields.slug} itemProp="url">
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                <img className="object-contain h-48 w-full"
                  src={post.frontmatter.hero.publicURL} 
                  alt="SVGicon"/>
                  <h2 class="text-gray-800 text-3xl py-4">
                      <span itemProp="headline">{title}</span>
                  </h2>
                  <small> 
                      <div className="flex justify-start">
                      <img 
                      src={Clocksvg}
                      width="15" 
                      height="15"
                      alt="SVGicon"/>
                      {post.frontmatter.date}
                      </div>
                  </small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
                <section>
                  <Tags tags={post.frontmatter.tags} />
                </section>
              </article>
              </Link>
            </li>
          )
        })}
      </ol>
      {/* <div class="flex justify-between">
      <Link class="bottom-0.left-0" to={pageContext.previousPagePath}>前のページ</Link>
      <Link class="bottom-0.right-0" to={pageContext.nextPagePath}>次のページ</Link>
      </div> */}
      <Pagenation pageContext={pageContext} />
      </div>
      {/* Sidebar固定 */}
      <div class="flex w-1/5 p-4 mt-8 self-start rounded-xl shadow-md bg-white">
          <Profile />
      </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query  ($skip: Int!, $limit: Int!){
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
      ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY.MM.DD")
          title
          tags
          description
          hero{
            publicURL
          }
        }
      }
    }
  }
`
