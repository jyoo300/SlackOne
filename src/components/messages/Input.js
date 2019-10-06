//submits messages to chatkit api

import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.message);
        this.setState({
            message: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="ui form">
                <div className="field">
                    <input type="text" 
                           value={this.state.message}
                           onChange={this.handleChange}
                    />
                </div>
                <button className="ui button primary">Message</button>
            </form>
        )
    }
}
export default Input;