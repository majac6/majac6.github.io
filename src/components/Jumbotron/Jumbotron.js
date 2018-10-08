import React from 'react'

import './Jumbotron.scss'

const Jumbotron = ({ title, date, category }) => {
	return (
		<div className="jumbotron event">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<span className={`badge badge-${category}`}>{category}</span>
						<div className="title">{title}</div>
						{date !== '' && <div className="date">{date}</div>}
					</div>
				</div>
			</div>
		</div>
	)
}

Jumbotron.defaultProps = {
	title: 'JumboTron Title',
	date: '',
}

export default Jumbotron
