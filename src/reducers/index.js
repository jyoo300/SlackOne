//combines various reducers into one reducer function

import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import postsReducer from './postsReducer';
import channelsReducer from './channelsReducer';
import posts2Reducer from './posts2Reducer';
import repliesReducer from './repliesReducer';
import authReducer from './authReducer';

export default combineReducers({
	auth: authReducer,
	posts: postsReducer,
	posts2: posts2Reducer,
	channels: channelsReducer,
	replies: repliesReducer,
	form: formReducer
});