import React, { useState } from "react";
import { v4 } from "uuid";

const DEFAULT_FORM = {
	url: "",
	topText: "",
	btmText: "",
};

const NewMemeForm = ({ addMeme }) => {
	const [form, setForm] = useState(DEFAULT_FORM);
	const handleSubmit = (e) => {
		e.preventDefault();
		addMeme({ ...form, id: v4() });
		setForm(DEFAULT_FORM);
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((f) => ({ ...f, [name]: value }));
	};
	return (
		<div>
			<h2></h2>
			<form action="">
				<label htmlFor="url">url</label>
				<input
					type="text"
					name=""
					id=""
					onChange={handleChange}
					value={form.url}
				/>
				<label htmlFor="topText">top text</label>
				<input
					type="text"
					name=""
					id=""
					onChange={handleChange}
					value={form.topText}
				/>
				<label htmlFor="btmText">bottom text</label>
				<input
					type="text"
					name=""
					id=""
					onChange={handleChange}
					value={form.btmText}
				/>
				<button type="submit">generate</button>
			</form>
		</div>
	);
};

export default NewMemeForm;
