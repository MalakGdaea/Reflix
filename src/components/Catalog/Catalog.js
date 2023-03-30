import { moviesData } from "../../Constants";
import MoviesList from "./MoviesList";
import { useState } from "react";

function Catalog({ budget }) {
  const [movies, setMovies] = useState(moviesData);
  const rentedMovies = movies.filter((movie) => movie.isRented == true);

  const action = (actionName, movieID) => {
    let moviesCopy = [...movies];
    let movie = moviesCopy.find((movie) => movie.id == movieID);
    actionName == "rent" ? (movie.isRented = true) : (movie.isRented = false);
    setMovies(moviesCopy);
  };

  return (
    <div>
      <input type={"text"} placeholder={"Search"}></input>
      <span>Budget: ${budget}</span>
      {rentedMovies.length !== 0 ? (
        <MoviesList movies={rentedMovies} catalogTitle={"Rented"} action={action} />
      ) : (
        <></>
      )}
      <MoviesList movies={movies} catalogTitle={"Catalog"} action={action} />
    </div>
  );
}

export default Catalog;
