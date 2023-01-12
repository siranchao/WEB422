//import methods from Movies Module
const MoviesDB = require("./modules/moviesDB.js");
const movies = new MoviesDB();


//@controller: add a new movie
//@route POST /api/users
const addMovie = (req, res) => {

}


//@controller: fetch selected movies
//@route GET /api/users
const getMovies = (req, res) => {

}

//@controller: fetch a movie by id
//@route GET /api/users/:id
const getMovieById = (req, res) => {

}

//@controller: update a movie by id
//@route PUT /api/users/:id
const updateMovie = (req, res) => {

}

//@controller: delete a movie
//@route DELETE /api/users/:id
const deleteMovie = (req, res) => {

}

module.exports = { addMovie, getMovies, getMovieById, updateMovie, deleteMovie }