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
                    <div style={{width: 'inherit'}}>
                    <img src={movie.Poster} alt={'movie'} />
                    </div>
                    <Button style={{width: '100%', marginTop: 15}} title="Details" onClick={(e) => history.push(`/details/${movie.imdbID}`)}>Details</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default MovieCard