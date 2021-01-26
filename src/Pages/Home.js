import React from "react";
import AllServices from '../Services/service';
import { useState } from 'react';
import Search from '../Components/Search';
import MovieList from '../Components/MovieList';

const Home = () => {
    const [movies, setMovies] = useState([])
    const handleSearch = async (searchTerm) => {
      let response = await (await AllServices.getMovies(searchTerm)).json()
      const {Search} = response
      setMovies(Search)
    }
    return (
        <>
        <Search handleClick={handleSearch}/>
        <MovieList movies={movies}/>
        </>
    )
}

export default Home;