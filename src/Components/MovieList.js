import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
    return (
        <div className={'container-fluid movie-app'}>
            <div className="row">
                {movies && Array.isArray(movies) && movies.length ? movies.map((movie, i) => (
                        <MovieCard key={i} movie={movie} />
                )): null}
            </div>
        </div>
    )
}

export default MovieList;