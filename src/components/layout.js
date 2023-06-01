import * as React from "react"

import Header from "./header"

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div
        className=" w-[80%] md:w-[60%] mx-auto"
      >
        <main>{children}</main>
      </div>
      <footer className="bg-[#723cb9] mt-auto py-3 text-center text-white">
        © {new Date().getFullYear()} &middot; Built with ❤️ by Edrisa Leigh
      </footer>
    </div>
  )
}

export default Layout
