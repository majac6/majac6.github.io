import React from 'react'
import Link from 'gatsby-link'

const PostItem = ({ post }) => {
	// console.log(post)
	return (
		<Link to={post.node.frontmatter.path}>
			<div className="post-item" key={post.node.frontmatter.path}>
				<div>
					<span className={`badge badge-${post.node.frontmatter.category}`}>
						{post.node.frontmatter.category}
					</span>
					<small>{post.node.frontmatter.date}</small>
				</div>
				<div className="title">{post.node.frontmatter.title}</div>
				<p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
			</div>
		</Link>
	)
}

export default PostItem
