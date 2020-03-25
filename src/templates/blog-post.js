import React from "react";
import { graphql } from "gatsby";

import "./blog-post.scss";

export default ({ data }) => {
  const post = data.markdownRemark;
  const {title, date, author} = post.frontmatter;

  console.log(post);

  return (
    <div className="post_section">
      <header className="post_header">
        <div className="container">
          <h1 className="title">{title}</h1>
          <div className="meta">
            <span className="author">by {author}</span>
            <span className="date">{date}</span>
          </div>
        </div>
      </header>
      <div class="post_content">
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date
      }
    }
  }
`;