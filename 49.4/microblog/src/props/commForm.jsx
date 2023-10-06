import React, { useState } from "react";

export const CommForm = ({ submitCommentForm }) => {
	const [text, setText] = useState();
	const handleSubmit = (e) => {
		e.preventDefault();
		submitCommentForm(text);
		setText("");
	};
	const handleChange = (e) => {
		setText(e.target.value);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						type="text"
						onChange={handleChange}
						id="commentform-text"
						name="text"
						size="50"
						placeholder="new comment"
						value={text}
					/>
				</div>
				<button>add</button>
			</form>
		</div>
	);
};
