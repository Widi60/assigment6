import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Search from "./components/Search";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = "c0845552";

  useEffect(() => {
    fetchMovies("one piece");
  }, []);

  const fetchMovies = async (searchTerm) => {
    if (!searchTerm) return;

    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`
      );
      setMovies(response.data.Search || []);
    } catch (err) {
      setError("Failed to fetch movies");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    fetchMovies(query);
  };

  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <Header title="OneScreen" />
          </div>
          <div className="col-md-6">
            <Search onSearch={handleSearch} />
          </div>
        </div>
      </div>
      {loading && <p className="text-center text-info">Loading...</p>}
      {!loading && !error && movies.length === 0 && (
        <p className="text-center text-warning">No relevant results found</p>
      )}
      {error && <p className="text-center text-danger">{error}</p>}
      <div className="container">
        <div className="row">
          {movies.map((movie) => (
            <Movie key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
