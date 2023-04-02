import { moviesData, MOVIE_COST } from "../../Constants";
import MoviesList from "./MoviesList";
import { useState } from "react";
import "./Catalog.css";
import { useParams } from "react-router-dom";

const getUserRentedMovies = (rentedMoviesIDs) => {
  moviesData.forEach((movie) => {
    if (rentedMoviesIDs.includes(movie.id)) {
      movie.isRented = true;
    } else {
      movie.isRented = false;
    }
  });
};

function Catalog() {
  const { userID } = useParams();
  const user = JSON.parse(localStorage[userID]);
  getUserRentedMovies(user.rentedMoviesIDs);
  const [movies, setMovies] = useState(moviesData);
  const [searchMovie, setSearchMovie] = useState("");
  const [budget, setBudget] = useState(user.budget);

  let rentedMovies = movies.filter((movie) => movie.isRented == true);

  const updateSearchMovie = (event) => {
    setSearchMovie(event.target.value);
    filterMoviesBasedOnSearch(event.target.value);
  };

  const filterMoviesBasedOnSearch = (searchMovie) => {
    let filteredMovies = moviesData.filter((movie) =>
      movie.title.toLowerCase().includes(searchMovie.toLowerCase())
    );
    setMovies(filteredMovies);
  };

  const rent = (movieID) => {
    if (budget - MOVIE_COST < 0) {
      alert("There are insufficient funds");
      return;
    }
    user.rentedMoviesIDs.push(movieID);
    let updatedBudget = budget - MOVIE_COST;
    updateUserBudgetAndRentedMovies(movieID ,updatedBudget, true);
  };

  const unRent = (movieID) => {
    let updatedBudget = budget + MOVIE_COST;
    let movieIndex = user.rentedMoviesIDs.findIndex((id) => id == movieID);
    user.rentedMoviesIDs.splice(movieIndex, 1);
    updateUserBudgetAndRentedMovies(movieID ,updatedBudget, false);
  };

  const updateUserBudgetAndRentedMovies = (movieID,updatedBudget, isRented) => {
    let moviesCopy = [...movies];
    let movie = moviesCopy.find((movie) => movie.id == movieID);
    setBudget(updatedBudget);
    user.budget = updatedBudget;
    movie.isRented = isRented;
    localStorage[userID] = JSON.stringify(user);
    setMovies(moviesCopy);
  };

  return (
    <div>
      <div className="search-and-budget">
        <input id="search-input" type="text" value={searchMovie} placeholder="Search"
        onChange={updateSearchMovie}></input>
        <span id="budget">Budget: ${budget}.00</span>
      </div>
      {rentedMovies.length !== 0 ? (
        <MoviesList movies={rentedMovies} catalogTitle={"Rented"} rent={rent} unRent={unRent}/>
      ) : (
        <></>
      )}
      <MoviesList movies={movies} catalogTitle={"Catalog"} rent={rent} unRent={unRent}/>
    </div>
  );
}

export default Catalog;
