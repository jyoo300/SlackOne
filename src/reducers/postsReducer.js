//reducer that handles post fetching and creating data, as well as fetching channels

export default (state = [], action) => {
	switch(action.type) {
		case 'FETCH_POST':
			return {...state, [action.payload.id]: action.payload};
		case 'FETCH_CHANNELS':
			return action.payload;
		case 'CREATE_POST': 
			return {...state, [action.payload.id]: action.payload};
		default:
			return state;
	}
};