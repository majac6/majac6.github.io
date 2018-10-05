import React from 'react'

import './Jumbotron.scss'

const Jumbotron = ({ title, date }) => {
	return (
		<div className="jumbotron">
			<div className="container">
				<div className="row">
					<div className="col-12">
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
