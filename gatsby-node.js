/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions

	const blogPostTemplate = path.resolve(`./src/templates/blogTemplate.js`)

	return graphql(`
		{
			allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___date] }
				limit: 1000
			) {
				edges {
					node {
						frontmatter {
							path
						}
					}
				}
			}
		}
	`).then(result => {
		// console.log(result)
		if (result.errors) {
			return Promise.reject(result.errors)
		}

		result.data.allMarkdownRemark.edges.forEach(({ node }) => {
			createPage({
				path: node.frontmatter.path,
				component: blogPostTemplate,
				context: {}, // additional data can be passed via context
			})
		})
	})
}

// const _ = require('lodash')
// const Promise = require('bluebird')
// const path = require('path')
// const select = require('unist-util-select')
// // const fs = require('fs-extra')

// exports.createPages = ({ graphql, boundActionCreators }) => {
// 	const { createPage } = boundActionCreators

// 	return new Promise((resolve, reject) => {
// 		const pages = []
// 		const blogPost = path.resolve(
// 			'./src/components/Layout/BlogPost/BlogPost.js'
// 		)
// 		resolve(
// 			graphql(
// 				`
// 					{
// 						allMarkdownRemark(limit: 1000) {
// 							edges {
// 								node {
// 									frontmatter {
// 										path
// 										category
// 									}
// 								}
// 							}
// 						}
// 					}
// 				`
// 			).then(result => {
// 				if (result.errors) {
// 					// console.log(result.errors)
// 					reject(result.errors)
// 				}

// 				// Create blog posts pages.
// 				_.each(result.data.allMarkdownRemark.edges, edge => {
// 					createPage({
// 						path: edge.node.frontmatter.path,
// 						component: blogPost,
// 						context: {
// 							path: edge.node.frontmatter.path,
// 						},
// 					})
// 				})
// 			})
// 		)
// 	})
// }
