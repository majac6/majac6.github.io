import 'font-awesome/css/font-awesome.css'
import '../styles/core.scss'
import 'prismjs/themes/prism-okaidia.css'

import React from 'react'
import Link from 'gatsby-link'
// import { Container } from 'react-responsive-grid'

import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Wallpaper from '../components/Wallpaper'
import ReactDisqusComments from 'react-disqus-comments'

class Template extends React.Component {
  handleNewComment(comment) {
    window.console.log(comment.text)
  }

  render() {
    const { location, children } = this.props

    let rootPath = '/'
    if (typeof __PREFIX_PATHS__ !== 'undefined' && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + '/'
    }

    return (
      <div id="page">
        <Nav />
        <div className="main">{children()}</div>
        <Footer />
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
