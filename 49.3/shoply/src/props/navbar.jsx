import React from "react";
import { useSelector } from "react-redux";
import { calcTotalQuantity } from "../help/calc";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const itemCount = useSelector((store) =>
		calcTotalQuantity(store.cartItems)
	);
	const cartValue = useSelector((store) => store.cartValue);
	const itemUnit = itemCount === 1 ? "item" : "items";
	return (
		<nav>
			<Link to="/">shoply</Link>
			<ul>
				<li>
					<span>
						{itemCount} {itemUnit} (${cartValue})
					</span>
				</li>
				<li>
					<Link to="/cart">see cart</Link>
				</li>
			</ul>
		</nav>
	);
};
