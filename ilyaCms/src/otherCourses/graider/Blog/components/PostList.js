import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './../actions/index';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList = () => {
    const { posts } = this.props;
    return posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
