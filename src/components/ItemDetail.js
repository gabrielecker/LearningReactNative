import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchPost } from '../actions'

class ItemDetail extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.id);
  }

  render() {
    const { post } = this.props;

    if(!post) {
      return <Text>Loading...</Text>;
    }

    return (
      <View>
        <Text>{post.title}</Text>
        <Text>{post.body}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { post: state.posts.selected };
};

export default connect(mapStateToProps, { fetchPost })(ItemDetail);
