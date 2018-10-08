import React from 'react'
import Link from 'gatsby-link'

import './Categories.scss'

const Categories = ({ list, active }) => {
	return (
		<div className="categories">
			<h3>카테고리</h3>
			<ul>
				<li key={''}>
					<Link to="/">all</Link>
				</li>
				{list.map(item => {
					return (
						<li key={item}>
							<Link to={`?category=${item}`}>
								{item === active && (
									<i className="fa fa-arrow-right mr-2" aria-hidden="true" />
								)}
								{item}
							</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Categories
