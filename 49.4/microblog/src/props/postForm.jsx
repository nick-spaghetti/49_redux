import React, { useState } from "react";

export const PostForm = ({ post, save, cancel }) => {
	const [postData, setPostData] = useState({
		title: post.title,
		description: post.description,
		body: post.body,
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setPostData((data) => ({
			...data,
			[name]: value,
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		save(postData);
	};
	return (
		<form>
			<div>
				<laabel htmlFor="">title:</laabel>
				<input
					type="text"
					onChange={handleChange}
					id="editform-title"
					name="title"
					className="form-control"
					value={postData.title}
				/>
			</div>
			<div>
				<laabel htmlFor="">description</laabel>
				<input
					type="text"
					onChange={handleChange}
					id="editform-description"
					name="description"
					className="form-control"
					value={postData.description}
				/>
			</div>
			<div>
				<laabel htmlFor="">body:</laabel>
				<input
					type="text"
					onChange={handleChange}
					id="editform-body"
					name="body"
					className="form-control"
					value={postData.body}
				/>
			</div>
			<div>
				<button>save</button>
				<button onClick={cancel}>cancel</button>
			</div>
		</form>
	);
};
