export const cartTotal = (products, cart, discAmt = 0) => {
	let total = 0;
	for (let id in products) {
		const { price } = products[id];
		const quantity = cart[id] || 0;
		total += price * quantity;
	}
	let totalWithDisc = total * (1 - discAmt);
};

export const calcTotalQuantity = (cart) => {
	let totalQauntity = 0;
	for (let id in cart) {
		totalQauntity += cart[id];
	}
	return totalQauntity;
};
