import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default List = () => {
	const products = useSelector((store) => store.products, shallowEqual);
	const productCards = Object.keys(products).map((id) => (
		<div>
			<div>
				<div>
					<h2>
						<Link to={`/products/${id}`}>{products[id].name}</Link>
					</h2>
				</div>
			</div>
		</div>
	));
	return (
		<div>
			<h4>look at all of our beautiful products</h4>
			<div>{productCards}</div>
		</div>
	);
};
