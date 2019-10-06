//displays messages from the Chatkit api (MessageList)
//allows user to send messages to the chatkit api (Input)

import React from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import MessageList from './MessageList';
import Input from './Input';

class ChatFeature extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            currentUser: null,
            currentRoom: {users:[]},
            messages: [],
            users: []
        }
        this.addMessage = this.addMessage.bind(this);
	}

	componentDidMount() {
		const { match: { params } } = this.props;

		const chatManager = new ChatManager({
            instanceLocator: "v1:us1:c5c0560a-fa96-4f39-9fc2-7e451e9bb2cf",
            userId: params.id,
            tokenProvider: new TokenProvider({
                url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/c5c0560a-fa96-4f39-9fc2-7e451e9bb2cf/token"
            })
        })

        chatManager.connect()
        .then(currentUser => {
            this.setState({ currentUser: currentUser })
            return currentUser.subscribeToRoom({
                roomId: "0532a8c4-9cc4-4cae-be42-7c72d2f861b8",
                messageLimit: 100,
                hooks: {
                    onMessage: message => {
                        this.setState({
                            messages: [...this.state.messages, message],
                        })
                    },
                 }
            })
        })

        .then(currentRoom => {
            this.setState({
                currentRoom,
                users: currentRoom.userIds
            })
        })
        .catch(error => console.log(error))
	}

	addMessage(text) {
        this.state.currentUser.sendMessage({
            text,
            roomId: this.state.currentRoom.id
        })
        .catch(error => console.error('error', error));
    }

	render() {
		return (
			<div>
				<h2 className="header">Messages from jyoo300</h2>
				 <MessageList messages={this.state.messages} />
				 <Input className="ui input" onSubmit={this.addMessage} />
			</div>
		);
	}
}

export default ChatFeature;