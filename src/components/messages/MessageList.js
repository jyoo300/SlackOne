//displays messages from chatkit api

import React from 'react';
import './Index.css';

class MessageList extends React.Component {
    render() {
        return (
           <div className="ui message">
                <ul>
                    {this.props.messages.map((message, index) => (
                        <li key={index}>
                            <h4 className="message-sender">{message.senderId}</h4>
                            <p className="message-text">{message.text}</p>
                            <div className="ui divider"></div>

                        </li>
                    ))}
                    <li></li>
                </ul>
            </div>
        )
    }
}

export default MessageList;