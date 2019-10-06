//includes a postform where the user inputs the name and body of the post
//the values are used to create a post using the {createPost} action

import React from 'react';
import {connect} from 'react-redux';
import {createPost} from '../actions';
import PostForm from './PostForm';

class PostCreate extends React.Component {
	onSubmit = (formValues) => {
		this.props.createPost(formValues, this.props.id);
	};

	render() {
		return (
        	<div>
        		<h3 className="ui dividing header">Create Post</h3>
        		<PostForm onSubmit={this.onSubmit} />
        	</div>
		);
	}
}

export default connect(null, {createPost})(PostCreate);