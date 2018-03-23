import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import ReactDisqusComments from 'react-disqus-comments'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div id="blog-post">
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />

        <div className="wallpaper">
          <h1>{post.frontmatter.title}</h1>
          <h4>{post.frontmatter.date}</h4>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">

              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              <div className="padding-h-50"></div>
            </div>

            <div className="col-12">
              <ReactDisqusComments
                shortname="majacblog"
                title="majac blog disqus"
                identifier={post.frontmatter.title + '-' + post.frontmatter.date}
                onNewComment={this.handleNewComment} />
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "YYYY년 M월 D일")
      }
    }
  }
`
