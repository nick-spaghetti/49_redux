import axios from "axios";
import { FETCH_POST } from "./types";

const API_URL = process.env.DATABASE_URL || "http://localhost:5000/api/posts";

export const getPostFromAPI = (id) => {
	return async function (dispatch) {
		const res = await axios.get(`${API_URL}/${id}`);
		return dispatch(getPost(res.data));
	};
};

const getPost = (post) => {
	return {
		type: FETCH_POST,
		post,
	};
};
