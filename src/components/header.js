import React from "react"
import { Link } from "gatsby"
// import Image from "./image"

const Sidebar = () => {

  return (
    <section class="c-profile p-section">
      <h2 class="c-heading--lg">管理人について</h2>
      {/* <div class="c-profile__img u-mblg">
        <Image filename="my-profile.jpg" />
      </div> */}
      <div class="c-profile__content">
        <div class="u-mblg c-editArea">
          <p > 駆け出しSEのkumaです。</p>
          <ul>
            <li>大学・大学院では工学を専攻</li>
            <li>2021年からIT企業でSEとして業務</li>
            <li>現在、AWSなどのシステムアーキテクチャやシステム構築に従事</li>
          </ul>
          <p>備忘録もかねて、ゆったりとブログ作っていきます。</p>
        </div>
        <p class="u-text-center"><Link to="/about" class="p-btn--detail">About Me</Link></p>
      </div>
    </section >
  )
}

export default Sidebar