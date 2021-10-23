import * as React from "react"
import { Link } from "gatsby"

const Footer = () => {

  return (
      <footer class= "bg-gray-200">
            <div class = "flex justify-center">
                <div class = "text-center px-4 py-2 m-2">
                  <Link to="/">Home</Link>
                </div>
                <div class = "text-center px-4 py-2 m-2">
                  <Link to="/about">About</Link>
                </div> 
                <div class = "text-center px-4 py-2 m-2">
                  <Link to="/policy">Policy</Link>
                </div>
            </div>
              <div class ="text-center text-xs">
                © {new Date().getFullYear()}, kuma
              </div>
      </footer>
  )
}

export default Footer
