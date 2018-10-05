import React, { Component } from 'react'
import { graphql } from 'gatsby'

import get from 'lodash/get'
import _ from 'lodash'

import PostItem from './PostItem'

import './Posts.scss'

export class Posts extends Component {
	render() {
		const posts = this.props.list

		return (
			<>
				{posts.map((item, index) => {
					if (item.node.path !== '/404/') {
						const title = get(item, 'node.frontmatter.title') || item.node.path
						return <PostItem post={item} key={index} />
					}
				})}
			</>
		)
	}
}

export default Posts
