import React, { Component } from 'react'
import { graphql } from 'gatsby'

import _ from 'lodash'

import Layout from '../components/layout'
import Posts from '../components/Posts'
import Categories from '../components/Categories'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'spoqa-han-sans/css/SpoqaHanSans-kr.css'
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

		const nextState = {
			posts: posts,
			categories: categories,
			category: '',
		}

		const queryParams = this.props.location.search
		if (queryParams.indexOf('category') > -1) {
			nextState.category = queryParams.replace('?category=', '')
		} else {
			nextState.category = ''
		}

		this.setState(nextState)
	}

	componentWillReceiveProps(props) {
		const queryParams = props.location.search
		let category = ''
		if (queryParams.indexOf('category') > -1) {
			category = queryParams.replace('?category=', '')
		}

		this.setState({
			category: category,
		})
	}

	// {category !== '' && <div className="col-12">분류 : {category}</div>}

	render() {
		const { posts, categories, category } = this.state

		// console.log(posts)

		return (
			<Layout>
				<div className="container">
					<div className="row">
						<div className="col-md-3 order-md-12 text-right">
							<Categories list={categories} active={category} />
						</div>
						<div className="col-md-9 order-md-1 posts">
							<Posts
								list={
									category === ''
										? posts
										: posts.filter(item => {
												return item.node.frontmatter.category === category
										  })
								}
							/>
						</div>
					</div>
				</div>
			</Layout>
		)
	}
}

// IndexPage.propTypes = {
// 	location: React.PropTypes.object,
// 	route: React.PropTypes.object,
// }

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
