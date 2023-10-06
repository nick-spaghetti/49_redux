import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
	getPostFromAPI,
	removeCommentFromAPI,
	removePostFromAPI,
	sendCommentToAPI,
	sendVoteToAPI,
	updatePostInAPI,
} from "../actions/creator";
import { PostForm } from "./postForm";
import { PostDisplay } from "./postDisplay";
import { CommList } from "./commList";
import { CommForm } from "./commForm";

export const Post = (props) => {
	const [isEditing, setIsEditing] = useState(false);
	const postId = Number(useParams().postId);
	const navigate = useNavigate();
	const post = useSelector((st) => st.posts[postId]);
	const dispatch = useDispatch();
	useEffect(
		function loadPostWhenPostOrIdChanges() {
			async function getPost() {
				dispatch(getPostFromAPI(postId));
			}
			if (!post) {
				getPost();
			}
		},
		[dispatch, postId, post]
	);

	const toggleEdit = () => {
		setIsEditing((edit) => !edit);
	};

	const edit = ({ title, description, body }) => {
		dispatch(updatePostInAPI(postId, title, description, body));
		toggleEdit();
	};

	const deletePost = () => {
		dispatch(removePostFromAPI(postId));
		navigate("/");
	};

	const vote = (direction) => {
		dispatch(sendVoteToAPI(postId, direction));
	};

	const addComment = (text) => {
		dispatch(sendCommentToAPI(postId, text));
	};

	const deleteComment = (commentId) => {
		dispatch(removeCommentFromAPI(postId, commentId));
	};

	if (!post) return <p>loading...</p>;

	return (
		<div>
			{isEditing ? (
				<PostForm
					post={post}
					save={edit}
					cancel={toggleEdit}
				/>
			) : (
				<PostDisplay
					post={post}
					toggleEdit={toggleEdit}
					deletePost={deletePost}
					doVote={vote}
				/>
			)}
			<section>
				<h4>comments</h4>
				<CommList
					comments={post.comments}
					deleteComment={deleteComment}
				/>
				<CommForm submitCommentForm={addComment} />
			</section>
		</div>
	);
};
