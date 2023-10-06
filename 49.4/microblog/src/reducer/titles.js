import {
	ADD_POST,
	FETCH_TITLES,
	REMOVE_POST,
	UPDATE_POST,
	VOTE,
} from "../actions/types";

const sortByVote = (posts) => {
	return posts.sort((a, b) => b.votes - a.votes);
};

const makeTitleFromPost = ({ id, title, description, votes }) => {
	return { id, title, description, votes };
};

export const rootReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_TITLES:
			return sortByVote([...action.titles]);
		case ADD_POST:
			return sortByVote([...state, makeTitleFromPost(action.post)]);
		case REMOVE_POST:
			return state.filter((title) => title.id !== action.postId);
		case UPDATE_POST:
			return state.map((title) =>
				title.id === action.post.id
					? makeTitleFromPost(action.post)
					: title
			);
		case VOTE:
			return sortByVote(
				state.map((title) =>
					title.id === action.postId
						? { ...title, votes: action.votes }
						: title
				)
			);
		default:
			return state;
	}
};
