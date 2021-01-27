import React from 'react';
import { Card, Button } from 'react-bootstrap';
import history from '../history'


const MovieCard = ({ movie }) => {
    return (
        <>
            <Card
                key={movie.imdbID}
                style={{ width: '18rem' }}
                className="mb-2"
            >
                <Card.Header>{movie.Title}</Card.Header>
                <Card.Body>
                    <img src={movie.Poster} alt={'movie'} />
                    <Button title="Details" onClick={(e) => history.push(`/details/${movie.imdbID}`)}></Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default MovieCard