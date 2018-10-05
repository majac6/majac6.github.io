import React, { Component } from 'react'
import { graphql } from 'gatsby'

import _ from 'lodash'

import Layout from '../components/layout'
import Posts from '../components/Posts'
import Categories from '../components/Categories'

import './../style/style.scss'

export class IndexPage extends Component {
	state = {
		posts: [],
		categories: [],
		category: '',
	}

	componentDidMount() {
		const { edges: posts } = this.props.data.allMarkdownRemark
		let categories = []
		_.forEach(posts, item => {
			categories.push(item.node.frontmatter.category)
		})
		categories = _.uniq(categories)

		this.setState({
			...this.state,
			posts: posts,
			categories: categories,
		})
	}

	render() {
		const { posts, categories, category } = this.state

		return (
			<Layout>
				<div className="container">
					{this.state.category}
					<div className="row">
						{/* {category !== '' && <div className="col-12">분류 : {category}</div>}
						<div className="col-md-3 order-md-12 text-right">
							<Categories list={categories} />
						</div> */}
						<div className="col-md-12 order-md-1 posts">
							<Posts list={posts} />
						</div>
					</div>
				</div>
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
