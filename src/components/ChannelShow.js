//shows a channel's body and name through the {fetchChannel} action
//has a postlist and postcreate component

import React from 'react';
import {connect} from 'react-redux';
import {fetchChannel} from '../actions';
import ChannelList from './ChannelList';
import PostCreate from './PostCreate';
import PostList from './PostList';
import './index.css';

class ChannelShow extends React.Component {
  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.fetchChannel(id);
  }

  render() {
    if (!this.props.channel) {
        return <div>Loading...</div>;
    }

    const { name, body } = this.props.channel;

    const {id} = this.props.match.params;

    return (
      <div>
        <ChannelList />
          <div className="center">
            <div className="ui segment">
              <h1 className="ui horizontal divider">{name}</h1>
              <p>{body}</p>
            </div>
            <div className="ui comments">
              <h3 className="ui dividing header">Posts</h3>
              <PostList id={this.props.channel.id} />
            </div>
            <PostCreate id={id} />
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { channel: state.channels[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchChannel }
)(ChannelShow);