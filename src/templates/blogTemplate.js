import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Jumbotron from '../components/Jumbotron'

export default function Template({
	data, // this prop will be injected by the GraphQL query below.
}) {
	const { markdownRemark } = data // data.markdownRemark holds our post data
	const { frontmatter, html } = markdownRemark
	return (
		<Layout>
			<Jumbotron title={frontmatter.title} date={frontmatter.date} />
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div
							className="blog-post-content"
							dangerouslySetInnerHTML={{ __html: html }}
						/>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "YYYY년 MM월 DD일")
				path
				title
			}
		}
	}
`
