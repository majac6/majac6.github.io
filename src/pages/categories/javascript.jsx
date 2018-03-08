import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import _ from 'lodash'

class Javascript extends React.Component {

  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title="Javascript" />
        <div className="wallpaper">
          <h1>Javascript</h1>
        </div>

        <div className="container" id="postlist-wrap">
          <div className="row">
            <div className="col-sm-12">
              {posts.map(post => {
                if (post.node.path !== '/404/' && post.node.frontmatter.category === 'Javascript') {
                  const title = get(post, 'node.frontmatter.title') || post.node.path
                  return (
                    <div key={post.node.frontmatter.path}>
                      <div className="title">
                        <Link style={{ boxShadow: 'none' }} to={post.node.frontmatter.path}>
                          {post.node.frontmatter.title}
                        </Link>
                      </div>
                      <small>{post.node.frontmatter.date}</small>
                      <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />

                      <hr className="margin-h-25" />
                    </div>
                  )
                }
              })}
            </div>
          </div>
        </div>
      </div>
    )

  }

}

Javascript.propTypes = {
  route: React.PropTypes.object,
}

export default Javascript

export const javascrpitpageQuery = graphql`
  query javascrpitQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "YYYY년 M월 D일")
            category
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
