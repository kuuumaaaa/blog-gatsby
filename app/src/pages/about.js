import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import image from "../images/about.png";

const Aboutpage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About" />
      <h1 className="text-2xl my-6 pl-8 border-b border-gray-600 font-semibold text-gray-800">About</h1>
      <p>SIerでSEしてます。</p>
      <p>業務はAWSのアーキテクト考えたりすることが多いです。</p>
      <p>フロントエンドの勉強や覚え書き・アウトプットする場をつくるためにブログを始めました。</p>
      <p>これとは別件でkaggleやsignateなどの機械学習のコンペにも時々参加してます。</p>
    </Layout>
  )
}

export default Aboutpage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`