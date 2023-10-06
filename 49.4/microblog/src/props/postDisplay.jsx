import React from "react";

export const PostDisplay = ({ doVote, toggleEdit, deletePost, post }) => {
	const { title, description, body, votes } = post;
	return (
		<div>
			<div>
				<h2>{title}</h2>
				<p>{description}</p>
				<div>{body}</div>
			</div>
			<div>
				<div>
					<i onClick={toggleEdit}>&#8853;</i>
					<i onClick={deletePost}>&#8855;</i>
				</div>
			</div>
			<div>
				<div>
					<b>{votes} votes</b>
					<i onClick={(e) => doVote("up")}>&#8593;</i>
					<i onClick={(e) => doVote("down")}>&#8595;</i>
				</div>
			</div>
		</div>
	);
};
