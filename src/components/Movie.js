import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="col-md-3 col-sm-6 col-xs-12 mb-4">
      <div className="card shadow-sm" style={{ height: "100%", width: "100%" }}>
        <a 
          href={`https://www.imdb.com/title/${movie.imdbID}`} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="card-img-top img-thumbnail"
            style={{ maxHeight: "200px", objectFit: "contain" }}
          />
        </a>
        <div className="card-body text-center">
          <a 
            href={`https://www.imdb.com/title/${movie.imdbID}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-decoration-none text-primary"
          >
            <h5 className="card-title">{movie.Title}</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Movie;
