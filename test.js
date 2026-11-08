const url = "http://localhost:8000/api/v1/movies";
// Read all movies
const readAllMovies = () => {
    fetch(url, { method: "GET" })
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.log("Error while fetching data", err);
        });
};
// Read a movie by ID
const readMovieById = (id) => {
    fetch(`${url}/${id}`, { method: "GET" })
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.log("Error while fetching data", err);
        });
};
// Create a movie
const createMovie = (payload) => {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.log("Error while creating movie", err);
        });
};
// Update a movie
const updateMovieById = (id, payload) => {
    fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.log("Error while updating movie", err);
        });
};
// Delete a movie
const deleteMovie = (id) => {
    fetch(`${url}/${id}`, {
        method: "DELETE"
    })
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.log("Error while deleting movie", err);
        });
};
// Call the function to read all movies
readAllMovies();
// Uncomment one of these to test other operations:
readMovieById("YOUR_MOVIE_ID");
 createMovie({
     title: "Inception",
     director: "Christopher Nolan",
     category: "Sci-Fi",
     year: 2010
 });
 updateMovieById("YOUR_MOVIE_ID", { year: 2011 });
 deleteMovie("YOUR_MOVIE_ID");