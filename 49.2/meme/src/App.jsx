import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import NewMemeForm from "./props/memeForm";
import Meme from "./props/meme";

const App = () => {
	const memes = useSelector((st) => st.memes);
	const dispatch = useDispatch();
	const addMeme = (newMeme) => {
		dispatch({ type: "ADD_MEME", meme: newMeme });
	};
	const deleteMeme = (id) => {
		dispatch({ type: "DELETE_MEME", id });
	};
	const memeComps = memes.map((m) => (
		<Meme
			key={m.id}
			topText={m.topText}
			btmText={m.btmText}
			url={m.url}
			deleteMeme={() => deleteMeme(m.id)}
		/>
	));
	return (
		<div className="App">
			<NewMemeForm addMeme={addMeme} />
			<hr />
			{memeComps}
		</div>
	);
};

export default App;
