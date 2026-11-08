import express from "express";

import {
    createMovie,
    readMovies,
    readMovieById,
    updateMovieById,
    deleteMovieById
} from "../controllers/movieController.js";

const router = express.Router();

// GET all movies
router.get("/", readMovies);

// GET a movie by ID
router.get("/:id", readMovieById);

// POST - Create a movie
router.post("/", createMovie);

// PUT - Update a movie
router.put("/:id", updateMovieById);

// DELETE - Delete a movie
router.delete("/:id", deleteMovieById);

export default router;