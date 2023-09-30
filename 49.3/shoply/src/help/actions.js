import { ADD_TO_CART, APPLY_DISCOUNT, REMOVE_FROM_CART } from "./types";

export const addToCart = (id) => {
	return {
		type: ADD_TO_CART,
		id,
	};
};

export const removeFromCart = (id) => {
	return {
		type: REMOVE_FROM_CART,
		id,
	};
};

export const applyDisc = (disc) => {
	return {
		type: APPLY_DISCOUNT,
		disc,
	};
};
