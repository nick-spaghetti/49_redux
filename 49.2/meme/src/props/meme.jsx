import React from "react";
import PropTypes from "prop-types";

const Meme = ({ deleteMeme, topText, btmText, url, id }) => {
	const handleDelete = () => {
		deleteMeme(id);
	};
	return (
		<div>
			<div>
				<span>{topText}</span>
				<img
					src={url}
					alt="a meme"
				/>
				<span>{btmText}</span>
				<button onClick={handleDelete}>delete</button>
			</div>
		</div>
	);
};

Meme.propTypes = {
	topText: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	btmText: PropTypes.string.isRequired,
};

export default Meme;
