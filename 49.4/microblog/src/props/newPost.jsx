import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendPostToAPI } from "../actions/creator";
import { PostForm } from "./postForm";

export const NewPost = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const add = ({ title, desciption, body }) => {
		dispatch(sendPostToAPI(title, desciption, body));
		navigate("/");
	};
	const cancel = () => {
		navigate("/");
	};
	return (
		<main>
			<h1>new post</h1>
			<PostForm
				save={add}
				cancel={cancel}
			/>
		</main>
	);
};
