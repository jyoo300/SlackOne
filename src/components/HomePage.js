//contains a header used to sign in
//default page that app navigates to

import React from 'react';
import {connect} from 'react-redux';
import ChannelList from './ChannelList';
import Header from './Header';
import './index.css';

class HomePage extends React.Component {
	render() {
		if(this.props.isSignedIn === true) {
			return (
				<div>
					<ChannelList />
						<p className="down">Access channels to your left.</p>
				</div>
			);
		}
		else {
			return (
				<div className="left">	
					<Header />
					<p>Sign in to access the channels.</p>
				</div>
			);
		}
	}
}

const mapStateToProps = (state) => {
	return {
		isSignedIn: state.auth.isSignedIn
	};
};

export default connect (mapStateToProps) (HomePage);