import React, { useState, useEffect } from "react";
import AllServices from '../Services/service';
import { Card, Button } from 'react-bootstrap'

const MovieDetails = (props) => {
    const [movie, setMovie] = useState({})
    
    useEffect(() => {
        getMovieDetail()
    }, [props.match.params.id])

    const getMovieDetail = async () => {
        let response = await (await AllServices.getMoviesDetail(props.match.params.id)).json()
        setMovie(response)
    }

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
                </Card.Body>
            </Card>
        </>
    )
}

export default MovieDetails;