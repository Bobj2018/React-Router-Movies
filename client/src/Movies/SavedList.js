import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';

function handleClick(e, data) {
	console.log(data);
}

const SavedList = (props) => {
	console.log('props', props);
	return (
		<div className="saved-list">
			<h3>Saved Movies:</h3>
			{props.list.map((movie) => (
				<div key={movie.id}>
					<NavLink to={`/movies/${movie.id}`}>
						<ContextMenuTrigger id={String(movie.id)}>
							<span className="saved-movie">{movie.title}</span>
						</ContextMenuTrigger>
					</NavLink>

					<ContextMenu
						style={{
							backgroundColor: 'white',
							padding: '10px',
							borderRadius: '25px',
							border: 'black solid 2px',
							zIndex: '3'
						}}
						id={String(movie.id)}
					>
						<MenuItem data={props} onClick={handleClick}>
							Delete Movie
						</MenuItem>
					</ContextMenu>
				</div>
			))}
			<Link to="/">
				<div className="home-button">Home</div>
			</Link>
		</div>
	);
};

export default SavedList;
