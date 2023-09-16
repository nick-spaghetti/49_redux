const INITIAL_STATE = {
	face: `(｀∀´)Ψ`,
};

const rootReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "MOOD_FIGHT":
			return { ...state, face: action.payload };
		case "MOOD_LOVE":
			return { ...state, face: action.payload };
		case "MOOD_FEED":
			return { ...state, face: action.payload };
		case "MOOD_SLEEP":
			return { ...state, face: action.payload };
		default:
			return state;
	}
};
