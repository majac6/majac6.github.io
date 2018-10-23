import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Nav from './Nav'

import './Layout.scss'

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<div className="layout">
				<Helmet
					title={data.site.siteMetadata.title}
					// meta={[
					// 	{ name: 'description', content: 'Sample' },
					// 	{ name: 'keywords', content: 'sample, something' },
					// ]}
				>
					<html lang="ko" />
				</Helmet>
				<Nav />
				{/* <Header siteTitle={data.site.siteMetadata.title} /> */}
				{/* <div className="left-top-rectangle" /> */}
				{/* <div className="right-bottom-rectangle" /> */}
				<div className="main">{children}</div>
				<footer>
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="title">마작 기술 블로그</div>
								<div className="links">
									<a
										href="https://github.com/majac6"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fa fa-github" aria-hidden="true" />
									</a>
									<a
										href="https://www.facebook.com/majac6"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fa fa-facebook-square" aria-hidden="true" />
									</a>
									<a
										href="https://www.linkedin.com/in/hungsun-lim-a37824106/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fa fa-linkedin-square" aria-hidden="true" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
		)}
	/>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
