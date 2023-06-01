import React from 'react';

import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const BlogCard = ({ blogData }) => {
  return (
    <>
      {blogData?.map(({
        id,
        slug,
        blogTitle,
        authorName,
        authorTitle,
        authorImage,
        datePublished,
        featuredImage,
        blogContent: { childMarkdownRemark },
      }) => (
        <div key={id} className="border-b border-t py-4">
          <div className="flex items-center gap-x-5">
            <div className="h-14 w-14 rounded-full bg-gray-200">
              <GatsbyImage
                className="rounded-full w-14 h-14"
                image={authorImage.gatsbyImageData}
                objectPosition="top"
                loading="eager"
                width={64}
                quality={95}
                alt=""
              />
            </div>
            <div>
              <div className="flex items-center gap-x-5">
                <h2 className="font-bold text-md">{authorName}</h2>
                <h4 className="text-sm text-[#515151]">{datePublished}</h4>
                <h4 className="text-sm text-[#515151]">{`${childMarkdownRemark.timeToRead} min read`}</h4>
              </div>
              <h3 className="text-sm text-[#515151]">{authorTitle}</h3>
            </div>
          </div>

          <div className="flex items-center lg:gap-x-16 gap-y-5 flex-col-reverse mt-5 lg:flex-row">
            <div className="w-full lg:w-[55%]">
              <Link to={`/${slug}`}>
                <h1 className="font-bold block text-2xl break-words mb-3 capitalize hover:underline transition-all">{blogTitle}</h1>
              </Link>
              <p className="text-sm text-[#515151] break-words">{childMarkdownRemark.excerpt}</p>
            </div>
            <Link to={`/${slug}`}>
              <div className="w-full lg:w-[300px] h-[150px] bg-gray-200 rounded-md">
                <GatsbyImage
                  className="rounded-md w-full h-[150px] lg:w-[300px] lg:h-[150px]"
                  image={featuredImage.gatsbyImageData}
                  loading="eager"
                  width="100%"
                  quality={95}
                  alt=""
                />
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}

export default BlogCard;
