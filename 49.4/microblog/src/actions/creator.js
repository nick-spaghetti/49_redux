import axios from "axios";
import {
	ADD_COMMENT,
	ADD_POST,
	FETCH_POST,
	REMOVE_COMMENT,
	REMOVE_POST,
	UPDATE_POST,
	VOTE,
} from "./types";

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

export const sendPostToAPI = (title, description, body) => {
	return async function (dispatch) {
		const res = await axios.get(`${API_URL}`, {
			title,
			description,
			body,
		});
		return dispatch(addPost(res.data));
	};
};

const addPost = (post) => {
	return {
		type: ADD_POST,
		post,
	};
};

export const removePostFromAPI = (id) => {
	return async function (dispatch) {
		await axios.delete(`${API_URL}/${id}`);
		return dispatch(removePost(id));
	};
};

const removePost = (postId) => {
	return {
		type: REMOVE_POST,
		postId,
	};
};

export const updatePostInAPI = (id, title, description, body) => {
	return async function (dispatch) {
		const res = await axios.put(`${API_URL}/${id}`, {
			title,
			description,
			body,
		});
		return dispatch(updatePost(res.data));
	};
};

const updatePost = (post) => {
	return {
		type: UPDATE_POST,
		post,
	};
};

export const sendVoteToAPI = (id, direction) => {
	return async function (dispatch) {
		const res = await axios.post(`${API_URL}/${id}/vote/${direction}`);
		return dispatch(vote(id, res.data.votes));
	};
};

const vote = (postId, votes) => {
	return {
		type: VOTE,
		postId,
		votes,
	};
};

export const removeCommentFromAPI = (postId, commentId) => {
	return async function (dispatch) {
		await axios.delete(`${API_URL}/${postId}/comments/${commentId}`);
		return dispatch(removeComment(postId, commentId));
	};
};

const removeComment = (postId, commentId) => {
	return {
		type: REMOVE_COMMENT,
		postId,
		commentId,
	};
};

export const sendCommentToAPI = (postId, text) => {
	return async function (dispatch) {
		const res = await axios.post(`${API_URL}/${postId}/comments/`, {
			text,
		});
		return dispatch(addComment(postId, res.data));
	};
};

const addComment = (postId, comment) => {
	return {
		type: ADD_COMMENT,
		postId,
		comment,
	};
};
