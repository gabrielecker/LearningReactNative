import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'
import ListItem from './ListItem';

class List extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;

    if(!posts) {
      return (
        <Text>Loading...</Text>
      );
    }

    const postItems = posts.map((post) => {
      return <ListItem key={post.id} item={post} />;
    })

    return (
      <ScrollView>{postItems}</ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts.all };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPosts }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
