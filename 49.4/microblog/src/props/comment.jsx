import React from "react";

export const Comment = (deleteComment, text, id) => {
	const handleDelete = (e) => {
		deleteComment(id);
	};
	return (
		<div>
			<p>
				{deleteComment && <i onClick={handleDelete}> &#10005; </i>}
				{text}
			</p>
		</div>
	);
};
