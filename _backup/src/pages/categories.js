import React, { Component } from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import _ from 'lodash'

export class index extends Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const category = location.search.replace('?category=', '')

    return (
      <div>
        {/* <Helmet title="Javascript" /> */}
        <div className="wallpaper">
          <h1>{category}</h1>
        </div>

        <div className="container" id="postlist-wrap">
          <div className="row">
            <div className="col-sm-12">
              {posts.map(post => {
                if (
                  post.node.path !== '/404/' &&
                  post.node.frontmatter.category === category
                ) {
                  const title =
                    get(post, 'node.frontmatter.title') || post.node.path
                  return (
                    <div key={post.node.frontmatter.path}>
                      <div className="title">
                        <Link
                          style={{ boxShadow: 'none' }}
                          to={post.node.frontmatter.path}
                        >
                          {post.node.frontmatter.title}
                        </Link>
                      </div>
                      <small>{post.node.frontmatter.date}</small>
                      <p
                        dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
                      />

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

index.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default index

export const graphQuery = graphql`
  query graphQuery {
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
