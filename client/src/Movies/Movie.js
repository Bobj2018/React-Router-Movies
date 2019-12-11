import React from 'react';

import MovieCard from './MovieCard';

const Movie = ({ movies, match, addToSavedList }) => {
	const movieID = match.params.id;
	const movie = movies.find((movie) => movie.id === Number(movieID));

	if (!movie) {
		return <div>Loading movie information...</div>;
	}
	return (
		<div className="save-wrapper">
			<MovieCard movie={movie} />
			<div
				className="save-button"
				onClick={() => {
					addToSavedList(movie);
				}}
			>
				Save
			</div>
		</div>
	);
};

export default Movie;
