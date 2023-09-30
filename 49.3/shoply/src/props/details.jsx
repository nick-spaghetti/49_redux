import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export default Details = () => {
	const { id } = useParams();
	const { image_url, name, price, description } = useSelector(
		(store) => ({ ...store.products[id] }, shallowEqual)
	);
	return (
		<div>
			<div>
				<img
					src={image_url}
					alt={name}
				/>
				<div>
					<div>
						<h5>{name}</h5>
						<p>{price}</p>
					</div>
					<p>{description}</p>
				</div>
				<Link to="/">go back</Link>
			</div>
		</div>
	);
};
