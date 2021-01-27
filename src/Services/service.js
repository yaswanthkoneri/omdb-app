const AllServices = {
    getMovies: (searchTerm) => fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=70e33447`),
    getMoviesDetail: (imdbId) => fetch(`http://www.omdbapi.com/?i=${imdbId}&apikey=70e33447`),
}

export default AllServices
