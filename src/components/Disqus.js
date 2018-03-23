import React from 'react'
import ReactDisqusComments from 'react-disqus-comments'

class Disqus extends React.Component {
  handleNewComment(comment) {
    window.console.log(comment.text)
  }

  render() {

    return (
      <ReactDisqusComments
        shortname="majacblog"
        identifier="react-disqus-thread-majac"
        title="majac blog disqus"
        onNewComment={this.handleNewComment}/>
    )
  }
}

export default Disqus