import React from 'react'

import './Jumbotron.scss'

const Jumbotron = ({ title, date }) => {
	return (
		<div className="jumbotron">
			<div className="title">{title}</div>
			{date !== '' && <div className="date">{date}</div>}
		</div>
	)
}

Jumbotron.defaultProps = {
	title: 'JumboTron Title',
	date: '',
}

export default Jumbotron
