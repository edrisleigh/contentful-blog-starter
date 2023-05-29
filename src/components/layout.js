import * as React from "react"

import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        className=" w-[80%] md:w-[60%] mx-auto"
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
