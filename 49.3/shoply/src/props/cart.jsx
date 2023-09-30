import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { applyDisc } from "../help/actions";
import { Link } from "react-router-dom";

export default Cart = () => {
	const [discount, setDiscount] = useState("");
	const dispatch = useDispatch();
	const { cartItems, cartValue, discAmt, discApp, products } = useSelector(
		(store) => store,
		shallowEqual
	);
	const handleChange = (e) => {
		setDiscount(e.target.value);
	};
	const handleDisc = (e) => {
		e.preventDefault();
		dispatch(applyDisc(discount));
	};
	const renderTable = () => {
		const itemRows = Object.keys(cartItems).map((id) => (
			<tr key={id}>
				<td>
					<Link>{products[id].name}</Link>
				</td>
				<td>{products[id].price}</td>
				<td>{cartItems[id]}</td>
				<td></td>
			</tr>
		));
		return (
			<table>
				<thead>
					<tr>
						<tr>item name</tr>
						<tr>item price</tr>
						<tr>item quantity</tr>
						<tr>actions</tr>
					</tr>
				</thead>
				<tbody>{itemRows}</tbody>
			</table>
		);
	};
	return cartItems.length === 0 ? (
		<h2>no items in cart</h2>
	) : (
		<div>
			{renderTable()}
			<p>
				total: ${cartValue}
				{discApp ? (
					<span>- you saved {discAmt * 100}.toFixed(0)%!</span>
				) : null}
			</p>
			<form onSubmit={handleDisc}>
				<label htmlFor="discount">discount: </label>
				<input
					type="text"
					id="discount"
					name="discount"
					value={discount}
					onChange={handleChange}
				/>
				<button>apply discount</button>
			</form>
		</div>
	);
};
