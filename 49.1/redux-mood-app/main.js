const store = Redux.createStore(rootReducer);

const face = document.getElementById("face");

const fighting = document
	.getElementById("fight")
	.addEventListener("click", (e) => {
		store.dispatch({ type: "MOOD_FIGHT", payload: `(งᓀ‸ᓂ)ง` });
	});
const happy = document.getElementById("love").addEventListener("click", (e) => {
	store.dispatch({ type: "MOOD_LOVE", payload: `^.~` });
});
const sad = document.getElementById("feed").addEventListener("click", (e) => {
	store.dispatch({ type: "MOOD_FEED", payload: `(￣￢￣)` });
});
const reset = document
	.getElementById("sleep")
	.addEventListener("click", (e) => {
		store.dispatch({ type: "MOOD_SLEEP", payload: `(᎑ ᎑).zzZ` });
	});

const renderFace = () => {
	face.innerHTML = store.getState().face;
};

renderFace();
store.subscribe(renderFace);
