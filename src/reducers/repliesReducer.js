//reducer that manages creating and fetching replies

export default (state = [], action) => {
	switch(action.type) {
		case 'CREATE_REPLY': 
			return {...state, [action.payload.id]: action.payload};
		case 'FETCH_REPLIES':
			return action.payload;
		default:
			return state;
	}
};