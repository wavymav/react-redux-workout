import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchPosts } from '../actions'

class PostsIndex extends Component {
  componentWillMount() {
    console.log('fetching posts');
    this.props.fetchPosts();
  }

  render() {
    return(
      <div>
        <div className="text-xs-right">
          <Link to="posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>

        List of Blog Posts
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => (
//   bindActionCreators({ fetchPosts }, dispatch)
// )
//
// export default connect(null, { fetchPosts: fetchPosts })(PostsIndex)

export default connect(null, { fetchPosts })(PostsIndex)
