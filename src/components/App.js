//creates routes for various components

import React from 'react';
import ChannelCreate from './ChannelCreate';
import ChannelShow from './ChannelShow';
import ReplyCreate from './ReplyCreate';
import HomePage from './HomePage';
import ChatFeature from './messages/ChatFeature';

import {Router, Route, Switch} from 'react-router-dom';
import history from '../history';

class App extends React.Component {
	render() {
		return (
			<div className="ui container">
				<Router history={history}>
					<div>
						<Switch>	
							<Route path="/" exact component={HomePage} />
							<Route path="/channels/new" exact component={ChannelCreate} />
							<Route path="/channels/:id" exact component={ChannelShow} />
							<Route path="/reply/:id" exact component={ReplyCreate} />
							<Route path="/messages/:id" exact component={ChatFeature} />
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;