import * as React from "react"
// import { Link } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import '../global.css'
// import Sidebar from "./Sidebar"
import Profile from "./profile"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div>
    {/* Header固定 */}
    <div class = "sticky top-0 z-50">
    <Header title={title}/>
  </div>
  <div className="global-wrapper" data-is-root-path={isRootPath}>
          <main>{children}</main>
    </div>
    <Footer />

    </div>
  )
}

export default Layout
