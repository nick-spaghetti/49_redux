import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import List from "../props/list";
import Details from "../props/details";
import Cart from "../props/cart";

export default Routes = () => {
	return (
		<Routes>
			<Route
				path="/"
				exact>
				<List />
			</Route>
			<Route
				path="/products/:id"
				exact>
				<Details />
			</Route>
			<Route
				path="/cart"
				exact>
				<Cart />
			</Route>
			<Navigate to="/" />
		</Routes>
	);
};
