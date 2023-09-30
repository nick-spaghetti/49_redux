import { cartTotal } from "../help/calc";
import { ADD_TO_CART, APPLY_DISCOUNT, REMOVE_FROM_CART } from "../help/types";

const validDiscounts = {
	REMOVE10: 0.1,
	REMOVE20: 0.2,
	REMOVE30: 0.3,
};

const DEFAULT_STATE = {
	products: data.products,
	cartItems: {},
	cartValue: 0.0,
	discApp: false,
	discAmt: 0,
};

export default rootReducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case ADD_TO_CART: {
			const cartCopy = { ...state.cartItems };
			cartCopy[action.id] = cartCopy[action.id] || 0;
			return {
				...state,
				cartItems: cartCopy,
				cartValue: cartTotal(state.products, cartCopy, state.discAmt),
			};
		}
		case REMOVE_FROM_CART: {
			const cartCopy = { ...state.cartItems };
			if (!cartCopy[action.id]) return state;
			cartCopy[action.id]--;
			if (cartCopy[action.id] === 0) {
				delete cartCopy[action.id];
			}
			return {
				...state,
				cartItems: cartCopy,
				cartValue: cartTotal(state.products, cartCopy, state.discAmt),
			};
		}
		case APPLY_DISCOUNT: {
			if (state.discApp === false && validDiscounts[action.discount]) {
				const discAmt = validDiscounts[action.discount];
				return {
					...state,
					cartValue: cartTotal(
						state.products,
						state.cartItems,
						discAmt
					),
					discApp: true,
					discAmt,
				};
			}
			return state;
		}
		default:
			return state;
	}
};
