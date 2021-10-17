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
        {/* <form
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
          <div className="">
            <input size="40"
                   type="text"
                   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                   id="name" name="name"
                   maxlength="30"
                   minlength="2"
                   required
                   autocomplete="name" />
          </div>
          <p/>
          <div class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            e-mail
          </div>
          <div className="form-group">
            <input size="40"
                   type="email"
                   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                   id="email"
                   name="email"
                   pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                   required
                   autocomplete="email" />
          </div>
          <p/>
          <div class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            message
          </div>
          <div className="form-group">
            <textarea cols="41"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="contact"
                      name="content"
                      rows="8"
                      required/>
          </div>
          <p/>
          <div class="md:flex md:items-center">
            <div class="md:w-1/3">
              <button class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded" type="submit">send</button>
            </div>
          </div>
        </form> */}

        <form
        className='contact_form'
        name="Contact Form"
        method="POST"
        data-netlify="true"
        action="/pages/success"
      >
        <input type="hidden" name="form-name" value="Contact Form" />
        <h1 className='contactHeader'>CONTACT US</h1>
        <label>お名前：</label><input type="text" name="name" className="contact__field" placeholder="お名前を入力して下さい"></input>
        <label>メールアドレス：</label><input name="email" type="email" className="contact__field" placeholder="メールアドレスを入力して下さい"></input>
        <label>件名：</label><input name='subject' type="text" className="contact__field" placeholder="件名を入力して下さい"></input>
        <label>お問い合わせ内容：</label><textarea name='message' className="contact__field" placeholder="お問い合わせ内容を入力して下さい"></textarea>
        <div data-netlify-recaptcha="true"></div>
        <button type='submit'>送信</button>
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