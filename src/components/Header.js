//contains an authentication form

import React from 'react';
import GoogleAuth from './GoogleAuth';
import './index.css';

class Header extends React.Component {	
	render() {
		return (
			<div className="ui secondary pointing menu">
				<h1>SlackOne</h1>
				<div className="right menu">
					<GoogleAuth />
				</div>
			</div>
		);
	}
};

export default Header;