import React from "react"
import { Link } from "gatsby"
// import Image from "../images"
import { StaticImage } from "gatsby-plugin-image"


const profile = () => {

  return (
    <section class="profile-h2">
      <h2 class="text-2xl py-6 font-semibold">管理人について</h2>
      <div class="m-5 object-center">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={100}
        height={100}
        quality={100}
        alt="Profile picture"
      />
      </div>
      <div class="c-profile__content">
        <div class="text-sm">
          <p > 駆け出しSEのkumaです。</p>
          <ul>
            <li>大学・大学院では工学を専攻</li>
            <li>2021年からIT企業でSEとして業務</li>
            <li>現在、AWSなどのシステムアーキテクチャやシステム構築に従事</li>
          </ul>
          <p>備忘録もかねて、ゆったりとブログ作っていきます。</p>
        </div>
        <p class="text-center text-xl py-6 font-semibold"><Link to="/about" class="p-btn--detail">About Me</Link></p>
      </div>
    </section >
  )
}

export default profile