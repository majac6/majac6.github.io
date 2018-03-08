import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import _ from 'lodash'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    let categories: any = []

    // console.log(posts)

    _.forEach(posts, (item) => {
      categories.push(item.node.frontmatter.category)
    })
    categories = _.uniq(categories)

    // console.log(categories)

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <div className="wallpaper">
          <h1>MAJAC's WEB Tech Blog</h1>
        </div>

        <div id="postlist-wrap" className="container">

          <div className="row">
            {/* <div className="col-md-12 col-sm-12 mr-auto ml-auto">
              <ul>
                {categories.map(item => {
                  return (<li key={item}><Link to={'categories/' + item}>{item}</Link></li>)
                })}
              </ul>
            </div> */}
            <div className="col-md-12 col-sm-12 mr-auto ml-auto">
              {posts.map(post => {
                if (post.node.path !== '/404/') {
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
            {/* <div id="categorylist-wrap" className="col-md-3 col-sm-12">
              <h4 className="mb-3">Categories</h4>
              <ul>
                {categories.map(item => {
                  return (<li key={item}><Link to={'categories/' + item}>{item}</Link></li>)
                })}
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
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
