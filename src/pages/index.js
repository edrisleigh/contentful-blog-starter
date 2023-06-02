import * as React from 'react';

import { graphql } from 'gatsby';

import Seo from '../components/seo';
import Layout from '../components/layout';
import BlogCard from '../components/blog-card';

const BlogPage = ({ data }) => {
  const blogData = data.allContentfulBlog.nodes;
  console.log(blogData);
  return (
    <Layout>
      <div className="mt-10">
        <h2 className="text-lg text-[#7026b9] font-bold capitalize mb-1">
          Blog Posts
        </h2>
      </div>

      <BlogCard blogData={blogData} />
    </Layout>
  )
};

export const Head = () => <Seo title="Blog" />

export const query = graphql`
  query {
    allContentfulBlog {
      nodes {
        id
        authorImage {
          gatsbyImageData(placeholder: BLURRED)
        }
        authorName
        authorTitle
        blogTitle
        blogContent {
          childMarkdownRemark {
            excerpt(pruneLength: 200)
            timeToRead
          }
        }
        datePublished(formatString: "MMMM DD, yyy")
        featuredImage {
          gatsbyImageData(placeholder: BLURRED)
        }
        slug
      }
    }
  }
`
export default BlogPage;
