//includes a replyform where the user inputs the name and body of the reply
//the values are used to create a post using the {createReply} action

import React from 'react';
import {connect} from 'react-redux';
import {createReply} from '../actions';
import ReplyForm from './PostForm';
import {fetchPost} from '../actions';

class ReplyCreate extends React.Component {
	onSubmit = (formValues) => {
		const {id} = this.props.match.params;
		this.props.createReply(formValues, id);
	};
	
	render() {
		return (
        	<div>
        		<h3 className="ui dividing header">Create Reply</h3>
        		<ReplyForm onSubmit={this.onSubmit} />
        	</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts2[ownProps.match.params.id] };
};

export default connect(mapStateToProps, {createReply, fetchPost})(ReplyCreate);