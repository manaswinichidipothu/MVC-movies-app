import Movie from "../models/movieModel.js";

// Create a movie
export const createMovie = (req, res) => {
    const newMovie = new Movie(req.body);

    newMovie.save()
        .then((result) => {
            res.status(201).json({
                message: "Movie created successfully",
                data: result
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: "Problem while creating movie",
                error: err.message
            });
        });
};

// Read all movies
export const readMovies = (req, res) => {
    const filters = req.query.category
        ? { category: req.query.category }
        : {};

    Movie.find(filters)
        .then((result) => {
            res.status(200).json({
                message: "Movies retrieved successfully",
                data: result
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: "Problem while retrieving movies",
                error: err.message
            });
        });
};

// Read a movie by ID
export const readMovieById = (req, res) => {
    const { id } = req.params;

    Movie.findById(id)
        .then((result) => {
            if (result) {
                res.status(200).json({
                    message: "Movie retrieved successfully",
                    data: result
                });
            } else {
                const error = new Error("Movie not found");
                error.status = 404;
                throw error;
            }
        })
        .catch((err) => {
            res.status(err.status || 500).json({
                message: err.message
            });
        });
};

// Update a movie
export const updateMovieById = (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    Movie.findByIdAndUpdate(id, updatedData, {
        new: true,
        runValidators: true
    })
        .then((result) => {
            if (result) {
                res.status(200).json({
                    message: "Movie updated successfully",
                    data: result
                });
            } else {
                const error = new Error("Movie not found");
                error.status = 404;
                throw error;
            }
        })
        .catch((err) => {
            res.status(err.status || 500).json({
                message: "Problem while updating movie",
                error: err.message
            });
        });
};

// Delete a movie
export const deleteMovieById = (req, res) => {
    const { id } = req.params;

    Movie.findByIdAndDelete(id)
        .then((result) => {
            if (result) {
                res.status(200).json({
                    message: "Movie deleted successfully",
                    data: result
                });
            } else {
                const error = new Error("Movie not found");
                error.status = 404;
                throw error;
            }
        })
        .catch((err) => {
            res.status(err.status || 500).json({
                message: "Problem while deleting movie",
                error: err.message
            });
        });
};