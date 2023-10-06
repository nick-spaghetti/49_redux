import axios from "axios";
import { FETCH_TITLES } from "./types";
const API_URL = process.env.DATABASE_URL || "http://localhost:5000/api/posts";

export const fetchTitlesFromAPI = () => {
	return async function (dispatch) {
		const res = await axios.get(`${API_URL}`);
		return dispatch(getTitles(res.data));
	};
};

const getTitles = (titles) => {
	return {
		type: FETCH_TITLES,
		titles,
	};
};
