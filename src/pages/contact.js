import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContuctPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <div class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <SEO title="Contuct" />
        <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white my-2" >Contuct me</h1>        
        <form
          name="contact" 
          method="POST" 
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          <div class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            name
          </div>
            <input size="40"
                   type="text"
                   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                   id="name" name="name"
                   maxlength="30"
                   minlength="2"
                   required
                   autocomplete="name" />
          <p/>
          <div class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            e-mail
          </div>
            <input size="40"
                   type="email"
                   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                   id="email"
                   name="email"
                   pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                   required
                   autocomplete="email" />
          <p/>
          <div class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            subject
          </div>
            <input size="40"
                   type="text"
                   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                   id="subject" name="subject"
                   maxlength="30"
                   minlength="2"
                   required
                   autocomplete="subject" />
          <p/>
          <div class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            message
          </div>
            <textarea cols="41"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="contact"
                      name="content"
                      rows="8"
                      required/>
          <p/>
          <div class="md:flex md:items-center">
            <div class="md:w-1/3">
              <button class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded" type="submit">send</button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default ContuctPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`