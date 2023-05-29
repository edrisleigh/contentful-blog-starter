import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="bg-[#7026b9] py-5">
    <div className="flex just justify-between items-center w-[80%] md:w-[60%] mx-auto">
      <Link to="/" className="text-xl no-underline text-white">Contentful Blog Starter</Link>
    </div>
  </header>
)

export default Header
