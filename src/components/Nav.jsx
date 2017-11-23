import * as React from 'react'
import Link from 'gatsby-link'

class Nav extends React.Component {
  render() {
    return (

      <nav>
        <div className="container">
          <div className="logo float-left">
            <Link to="/">MAJAC BLOG</Link>
          </div>
          <div className="menu float-right">
            <Link className="nav-link" to="/profile">Profile</Link>
          </div>
        </div>
      </nav>

      // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      //   <Link className="navbar-brand" to="/">MAJAC BLOG</Link>
      //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      //     <span className="navbar-toggler-icon"></span>
      //   </button>

      //   <div className="collapse navbar-collapse" id="navbarColor01">
      //     <ul className="navbar-nav mr-auto">
      //       <li className="nav-item">
      //         <Link className="nav-link" to={'/profile'}>Profile</Link>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>

    )
  }
}

export default Nav