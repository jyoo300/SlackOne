//connects api to localhost:3001

import axios from 'axios';

export default axios.create({
	baseURL: 'http://localhost:3001'
});