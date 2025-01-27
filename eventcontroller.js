// let movies=[];
// let id = 0;
const createError = require("http-errors");
const movieDB = require("./Schemas/Movie");

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await movieDB.find();
    res.send(movies);
  } catch (error) {
    next(createError(500, error.message));
  }
};

exports.createMovie = async (req, res) => {
  try {
    const { title, watched, director, year } = req.body;
    const newMovie = await movieDB.create({
      title,
      watched: Boolean(watched),
      director,
      year,
    });
    res.send(newMovie);
  } catch (error) {
    next(createError(500, error.message));
  }
};

//     const movie = req.body;
//     movie.id = id;
//     //push the new movie into the movies array
//     movies.push(movie);
//     id++;
//     //send back the updated array to user
//     res.send(movies);
// }

exports.getMovieById = async (req, res, next) => {
  const id = req.params.id;

  try {
    const movie = await movieDB.findById(id);
    if (!movie) {
      return next(createError(404, "No movie with that id"));
    }
    res.send(movie);
  } catch (error) {
    next(createError(500, error.message));
  }
};
/*
    
    const movie = movies.find(movie => movie.id == parseInt(id))
    if (movie) {
        res.send(movie)
    } else {
        next(createError(404, "Movie not found"));
    }
        */

exports.deleteMovie = async (req, res, next) => {
  const id = req.params.id;
  try {
    const movie = await movieDB.findByIdAndDelete(id);
    if (!movie) {
      return next(createError(404, "No movie with that id"));
    }
    res.send(movie);
  } catch (error) {
    next(createError(500, error.message));
  }
};

exports.updateMovie = async (req, res, next) => {
  const { title, watched, director, year } = req.body;
  const id = req.params.id;

  //   const movie = movies.find((movie) => movie.id == parseInt(id));

  try {
    const movie = await movieDB.findByIdAndUpdate(id, {
    //  ...movie,
      title: title,
      director: director,
      year: year,
      watched: watched,
    },{new:true});
    if (!movie) {
      return res.send("movie not found");
    }
    res.send(movie);
  } catch (error) {
    next(createError(500, error.message));
  }
};
