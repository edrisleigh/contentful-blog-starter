import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage = () => (
  <Layout>
    <div className="mt-10">
      <h2 className="text-lg text-[#7026b9] font-bold capitalize mb-1">Blogs</h2>
    </div>

    <div className="border-b border-t py-4">
      <div className="flex items-center gap-x-5">
        <div className="h-14 w-14 rounded-full bg-gray-200">
          <StaticImage
            className="rounded-full w-14 h-14"
            src="../images/user.jpeg"
            objectPosition="top"
            loading="eager"
            width={64}
            quality={95}
            alt=""
          />
        </div>
        <div>
          <div className="flex items-center gap-x-5">
            <h2 className="font-bold text-md">Edrisa Leigh</h2>
            <h4 className="text-sm text-[#adadad]">Apr 16, 2022</h4>
          </div>
          <h3 className="text-sm text-[#adadad]">The founder & chief designer at YourUXTeam</h3>
        </div>
      </div>

      <div className="flex items-center lg:gap-x-16 gap-y-5 flex-col-reverse mt-5 lg:flex-row">
        <div className="w-full lg:w-[55%]">
          <h1 className="font-bold text-2xl break-words mb-3">Psychology-Based Design Hacks That Will Make You A Better UX Designer</h1>
          <p className="text-sm text-[#adadad] break-words">If the first throughtthat crossed your mind when you read the title of the article was "What does Psychology has to do with UX Design?" then yes, tha's what we thought too, now that we're on the samepage, let's end this article here. Cheers!</p>
        </div>
        <div className="w-full lg:w-[300px] h-[150px]">
          <StaticImage
            className="rounded-md w-full lg:w-[300px] lg:h-[150px]"
            src="../images/img.jpeg"
            loading="eager"
            width="100%"
            quality={95}
            alt=""
          />
        </div>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Blog" />

export default BlogPage
