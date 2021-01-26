import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
    return (
        <div className={'container-fluid movie-app'}>
            <div className="row">
                {movies.map((movie, i) => (
                        <MovieCard key={i} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default MovieList;