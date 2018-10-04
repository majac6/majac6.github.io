import React from 'react'
import Link from 'gatsby-link'

import './Nav.scss'

const Nav = () => {
	return (
		<nav>
			<div className="container">
				<div className="logo float-left">
					<Link to="/">FE Tech Blog</Link>
				</div>
				<div className="menu float-right">
					<Link className="nav-link" to="/resume">
						<img
							id="navProfilePic"
							src="https://s.gravatar.com/avatar/ac88fef73fb20037feaf38ff349b129c?s=30&r=pg"
						/>
						<span>HungSun Majac LIM</span>
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Nav
