import { moviesData } from "../../Constants";
import MoviesList from "./MoviesList";
import { useState } from "react";
import "./Catalog.css"

function Catalog() {
  const [movies, setMovies] = useState(moviesData);
  const [searchMovie, setSearchMovie] = useState("");
  const [budget, setBudget] = useState(10);

  let rentedMovies = movies.filter((movie) => movie.isRented == true);

  const updateSearchMovie = (event) => {
    setSearchMovie(event.target.value);
    filterMoviesBasedOnSearch(event.target.value);
  };

  const action = (actionName, movieID) => {
    let moviesCopy = [...movies];
    let movie = moviesCopy.find((movie) => movie.id == movieID);
    if (actionName == "rent") {
      if (budget - 3 >= 0) {
        setBudget(budget - 3);
        movie.isRented = true;
      } else {
        alert("There are insufficient funds");
      }
    } else {
      movie.isRented = false;
      setBudget(budget + 3);
    }
    setMovies(moviesCopy);
  };

  const filterMoviesBasedOnSearch = (searchMovie) => {
    let filteredMovies = moviesData.filter((movie) =>
      movie.title.toLowerCase().includes(searchMovie.toLowerCase())
    );
    setMovies(filteredMovies);
  };

  return (
    <div>
      <div className="search-and-budget">
        <input id="search-input" type="text" value={searchMovie} placeholder="Search" onChange={updateSearchMovie}></input>
        <span id="budget">Budget: ${budget}.00</span>
      </div>
      {rentedMovies.length !== 0 ? (
        <MoviesList movies={rentedMovies} catalogTitle={"Rented"} action={action} />) : (<></>
      )}
      <MoviesList movies={movies} catalogTitle={"Catalog"} action={action} />
    </div>
  );
}

export default Catalog;
