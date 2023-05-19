import React, { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [directors, setDirectors] = useState([]);
  const [directorName, setDirectorName] = useState("");

  const handleAddMovie = () => {
    if (movieName.trim() !== "") {
      setMovies([...movies, { name: movieName, director: directorName }]);
      setMovieName("");
      setDirectorName("");
    }
  };

  const handleRemoveMovie = (index) => {
    const updatedMovies = [...movies];
    updatedMovies.splice(index, 1);
    setMovies(updatedMovies);
  };

  return (
    <div>
      <h1>Movie List</h1>
      <table
        style={{
          width: "100%"
        }}
      >
        <tr>
          <th>Movie Name</th>
          <th>Director Name</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>
            <input
              type="text"
              placeholder="Enter movie name"
              value={movieName}
              onChange={(e) => setMovieName(e.target.value)}
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="Enter director name"
              value={directorName}
              onChange={(e) => setDirectorName(e.target.value)}
            />
          </td>
          <td>
            <button onClick={handleAddMovie}>Add Movie</button>
          </td>
        </tr>
      </table>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            {movie.name} - {movie.director}
            <button onClick={() => handleRemoveMovie(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
