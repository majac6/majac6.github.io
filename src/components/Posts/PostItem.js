import React from 'react'
import Link from 'gatsby-link'

const PostItem = ({ post }) => {
	return (
		<Link to={post.node.frontmatter.path}>
			<div className="post-item" key={post.node.frontmatter.path}>
				<small>{post.node.frontmatter.date}</small>
				<div className="title">{post.node.frontmatter.title}</div>
				<p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
			</div>
		</Link>
	)
}

export default PostItem
