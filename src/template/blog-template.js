import React from 'react';

import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';

const BlogTemplate = ({ data }) => {
  console.log(data.contentfulBlog);
  const { authorName, authorTitle, authorImage, datePublished, featuredImage, blogContent, blogTitle} = data.contentfulBlog || {};

  const htmlBlogContent = blogContent.childMarkdownRemark.html;

  return (
    <Layout>
        <div className="mt-10">
          <h1 className="font-bold block mt-10 text-2xl md:text-3xl break-words mb-3 capitalize">{blogTitle}</h1>
          <div className="flex items-center gap-x-5 mt-8">
            <div className="h-10 w-10 rounded-full bg-gray-200">
              <GatsbyImage
                className="rounded-full w-10 h-10"
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
                <h2 className="font-bold text-sm">{authorName}</h2>
                <h4 className="text-xs text-[#515151]">{datePublished}</h4>
                <h4 className="text-xs text-[#515151]">{`${blogContent.childMarkdownRemark.timeToRead} min read`}</h4>
              </div>
              <h3 className="text-xs text-[#515151]">{authorTitle}</h3>
            </div>
          </div>
          <div className="w-full mt-10 h-80 bg-gray-200 rounded-md">
            <GatsbyImage
              className="rounded-md w-full h-80"
              image={featuredImage.gatsbyImageData}
              loading="eager"
              width="100%"
              height="100%"
              quality={95}
              alt=""
            />
          </div>

          <div
            className="max-w-4xl mt-10 m-auto mb-2 prose prose-pre:bg-slate-50 prose-pre:text-black"
            dangerouslySetInnerHTML={{
              __html: htmlBlogContent,
            }}
          />
        </div>
        <div className="my-10">
          <Link to="/" className="flex items-center gap-x-2 text-[#7026b9]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
            </svg>
            Go Home
          </Link>
        </div>
    </Layout>
  )
}

export const query = graphql`
  query myBlogPost($slug: String) {
    contentfulBlog(slug: {eq: $slug}) {
      authorImage {
        gatsbyImageData(placeholder: BLURRED)
      }
      authorTitle
      authorName
      blogTitle
      datePublished(formatString: "MMMM DD, yyyy")
      featuredImage {
        gatsbyImageData(placeholder: BLURRED)
      }
      blogContent {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
    }
  }
`

export default BlogTemplate;
