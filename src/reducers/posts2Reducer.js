//reducer that manages fetching post data

export default (state = [], action) => {
	switch(action.type) {
		case 'FETCH_POST':
			return {...state, [action.payload.id]: action.payload};
		case 'FETCH_POSTS':
			return action.payload;
		default:
			return state;
	}
};