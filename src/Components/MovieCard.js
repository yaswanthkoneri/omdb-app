import React from 'react';

import {Card, Button} from 'react-bootstrap';
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
                    <img src={movie.Poster} alt={'movie'}/>
                    <Button title="Details" onClick={(e)=> history.push(`/details/123`)}></Button>
                    {/* <Card.Title> Card Title </Card.Title> */}
                    {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
      </Card.Text> */}
                </Card.Body>
            </Card>
        </>
    )
}

export default MovieCard