//lists every channel with each channel's name and description using the {fetchChannels} action
//links to channel create page

import React from 'react';
import {connect} from 'react-redux';
import {fetchChannels} from '../actions';
import {Link} from 'react-router-dom';
import nextId from 'react-id-generator';
import {Menu, Sidebar} from 'semantic-ui-react';
import Header from './Header';
import './index.css';

const Chatkit = require("@pusher/chatkit-server");
const chatkit = new Chatkit.default({
    instanceLocator: "v1:us1:c5c0560a-fa96-4f39-9fc2-7e451e9bb2cf",
    key: "5d11d1c5-683f-4acb-872a-560402e35679:XWcKjCMuD4BbPMsmK52ivr/jqJcY8f8OQ5a2gcs8uL8="
});

class ChannelList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUsername: '',
			currentId: '',
			animation: 'push',
			direction: 'left',
			dimmed: false,
			visible: true
		}
		this.createUser = this.createUser.bind(this);
	}

	componentDidMount() {
		this.props.fetchChannels();
	}

	createUser() {
		chatkit.createUser({
			id: "User101",
			name: "User101"
		})
		.then((currentUser) => {
			this.setState({
				currentUsername: "User101",
				currentId: "User101"
			})
		})
		.catch((err) => {
			if(err.status === 400) {
				this.setState({
					currentUsername: "User101",
					currentId: "User101"
				})
			}
			else {
				console.log(err.status);
			}
		});
	}

	renderList() {
		return this.props.channels.map(channel => {
			const id = nextId();
			return (
				<div className="item" key={id}>
					<div className="content">
						<div className="description">
							<h2>
								<Link to={`/channels/${channel.id}`} className="header">
									#{channel.name}
								</Link>
							</h2>
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				{this.createUser()}
				<div className="right">
					<Header />
				</div>
				<div className="sidebar">
					<Sidebar.Pusher>
						<Sidebar
							as={Menu}
							animation={this.state.animation}
							direction={this.state.direction}
							icon='labeled'
							inverted
							visible={this.state.visible}
							vertical
							width='thin'
						>
						{this.renderList()}
						<Link to="/channels/new" className="ui button primary" >
							Create New Channel
						</Link>
						<h3>
							<Link to={`/messages/${this.state.currentId}`} className="header" >
								{this.state.currentUsername}
							</Link>
						</h3>
						</Sidebar>

					</Sidebar.Pusher>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		channels: Object.values(state.posts)
	};
};

export default connect(mapStateToProps, {fetchChannels})(ChannelList);