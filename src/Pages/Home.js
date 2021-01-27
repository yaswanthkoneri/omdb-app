import React from "react";
import AllServices from '../Services/service';
import { useState, useEffect } from 'react';
import Search from '../Components/Search';
import MovieList from '../Components/MovieList';
import history from '../history';

const Home = () => {
    const [movies, setMovies] = useState([])
    const [searchValue, setSearchValue] = useState(history.location.search.replace('?search=', ""))
    const handleSearch = async (searchTerm) => {
      let response = await (await AllServices.getMovies(searchTerm)).json()
      const {Search} = response
      setMovies(Search)
    }
    const handleSearchChange = (searchTerm) => {
      setSearchValue(searchTerm)
      history.push({
        pathname: '/',
        search: `?search=${searchTerm}`
      })
    }

    useEffect(()=> {
      handleSearch(searchValue)
    },[history.location.search])
    return (
        <>
        <Search handleClick={handleSearch} value={searchValue} handleSearchChange={handleSearchChange}/>
        <MovieList movies={movies}/>
        </>
    )
}

export default Home;