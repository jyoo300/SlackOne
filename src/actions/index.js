//dispatches actions to reducers

import channels from '../apis/channels';
import history from '../history';

export const createChannel = (formValues) => async (dispatch) => {
	const response = await channels.post('/channels', {...formValues});
	dispatch({type: 'CREATE_CHANNEL', payload: response.data});
	history.push('/');
};

export const fetchChannels = () => async dispatch => {
	const response = await channels.get('/channels');
	dispatch({type: 'FETCH_CHANNELS', payload: response.data}) 
};

export const fetchChannel = (id) => async dispatch => {
	const response = await channels.get(`/channels/${id}`);				
	dispatch({type: 'FETCH_CHANNEL', payload: response.data});
};

export const createPost = (formValues, id) => async (dispatch) => {
	const response = await channels.post(`/channels/${id}/posts`, {...formValues});
	dispatch({type: 'CREATE_POST', payload: response.data});
	history.push('/');
};

export const fetchPosts = (id) => async dispatch => {
	const response = await channels.get(`/channels/${id}/posts`);
	dispatch({type: 'FETCH_POSTS', payload: response.data}) 
};

export const fetchPost = (id) => async dispatch => {
	const response = await channels.get(`/posts/${id}`);
	dispatch({type: 'FETCH_POST', payload: response.data});
};

export const createReply = (formValues, id) => async (dispatch) => {
	const response = await channels.post(`/posts/${id}/replies`, {...formValues});
	dispatch({type: 'CREATE_REPLY', payload: response.data});
	history.push('/');
};

export const fetchReplies = (id) => async dispatch => {
	const response = await channels.get(`/posts/${id}/replies`);
	dispatch({type: 'FETCH_REPLIES', payload: response.data}) 
};

export const signIn = userId => {
  return {
    type: 'SIGN_IN',
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  };
};