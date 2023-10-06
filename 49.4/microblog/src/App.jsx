import logo from "./logo.svg";
import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./props/home";
import { NewPost } from "./props/newPost";
import { Post } from "./props/post";

function App() {
	return (
		<div className="App">
			<header>
				<h1>microblog</h1>
				<p>get started today</p>
				<nav>
					<NavLink
						exact
						to={"/"}>
						home
					</NavLink>
					<NavLink
						exact
						to={"/new"}>
						new post
					</NavLink>
				</nav>
			</header>
			<Routes>
				<Route>
					<Home
						exact
						path="/"
					/>
				</Route>
				<Route>
					<NewPost
						exact
						path="/new"
					/>
				</Route>
				<Route>
					<Post
						exact
						path="/:postId"
					/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
