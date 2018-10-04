import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Link from 'gatsby-link'
import get from 'lodash/get'
import _ from 'lodash'

import Layout from '../components/layout'
import Posts from '../components/Posts'

import './../style/style.scss'

export class IndexPage extends Component {
	state = {
		posts: [],
		categories: [],
	}

	componentDidMount() {
		const { edges: posts } = this.props.data.allMarkdownRemark
		let categories = []
		_.forEach(posts, item => {
			categories.push(item.node.frontmatter.category)
		})
		categories = _.uniq(categories)

		this.setState({
			posts: posts,
			categories: categories,
		})
	}

	render() {
		// <Jumbotron />

		return (
			<Layout>
				<Posts list={this.state.posts} />
			</Layout>
		)
	}
}

export default IndexPage

export const blogQuery = graphql`
	query getBlogPostsQuery {
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
