import React from "react";
import { Comment } from "./comment";

export const CommList = ({ comments = [], deleteComment }) => {
	return comments.map((c) => (
		<Comment
			key={c.id}
			id={c.id}
			text={c.text}
			deleteComment={deleteComment}
		/>
	));
};
