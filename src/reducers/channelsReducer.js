//reducer that mangages channel data

export default (state = [], action) => {
	switch(action.type) {
		case 'CREATE_CHANNEL':
			return {...state, [action.payload.id]: action.payload};
		case 'FETCH_CHANNEL':
			return {...state, [action.payload.id]: action.payload};
		default:
			return state;
	}
};