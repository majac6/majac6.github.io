import React from 'react'
import Link from 'gatsby-link'

import './Categories.scss'

const Categories = ({ list, active }) => {
	return (
		<>
			<h3>카테고리</h3>
			<ul className="categories">
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
		</>
	)
}

export default Categories
