import React from 'react'
import Link from 'gatsby-link'

import './Categories.scss'

const Categories = ({ list }) => {
	return (
		<ul className="categories">
			{list.map(item => {
				return (
					<li key={item}>
						<Link to={`?category=${item}`}>{item}</Link>
					</li>
				)
			})}
		</ul>
	)
}

export default Categories
