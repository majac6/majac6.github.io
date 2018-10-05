import React from 'react'
import Link from 'gatsby-link'

import './Nav.scss'

const Nav = () => {
	return (
		<nav>
			<div className="container">
				<div className="row">
					<div className="col-auto mr-auto logo">
						<Link to="/">마작 기술 블로그</Link>
					</div>
					<div className="col-auto">
						<Link className="nav-link profile" to="/resume">
							<img
								width="40px"
								id="navProfilePic"
								src="https://s.gravatar.com/avatar/ac88fef73fb20037feaf38ff349b129c?s=500&r=pg"
							/>
							<span>HungSun LIM</span>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Nav
