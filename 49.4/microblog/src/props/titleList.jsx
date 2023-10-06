import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTitlesFromAPI } from "../actions/titles";
import { sendVoteToAPI } from "../actions/creator";
import { Link } from "react-router-dom";

export const TitleList = () => {
	const titles = useSelector((st) => st.titles);
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		async function fetchTitle() {
			await dispatch(fetchTitlesFromAPI());
			setIsLoading(false);
		}
		if (isLoading) {
			fetchTitle();
		}
	}, [dispatch, isLoading]);
	const vote = (direction, id) => {
		dispatch(sendVoteToAPI(id, direction));
	};
	if (isLoading) return <b>loading...</b>;
	if (!isLoading && titles.length === 0) {
		return <b>add a post</b>;
	}
	return (
		<div>
			{titles.map((title) => (
				<div key={title.id}>
					<div className="card">
						<div className="card-body">
							<div className="card-title">
								<Link to={"/" + title.id}>{title.title}</Link>
							</div>
							<div className="card-text">
								<i>{title.description}</i>
							</div>
						</div>
						<div className="card-footer">
							<small>{title.votes} votes</small>
							<i onClick={(e) => vote("up", title.id)}>&#8593;</i>
							<i onClick={(e) => vote("down", title.id)}>
								&#8595;
							</i>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
