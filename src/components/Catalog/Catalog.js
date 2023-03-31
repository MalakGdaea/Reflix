import { moviesData } from "../../Constants";
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

  const rent = (movieID) => {
    let moviesCopy = [...movies];
    let movie = moviesCopy.find((movie) => movie.id == movieID);
    if (budget - 3 >= 0) {
      setBudget(budget - 3);
      user.budget -= 3;
      user.rentedMoviesIDs.push(movieID);
      movie.isRented = true;
    } else {
      alert("There are insufficient funds");
    }
    localStorage[userID] = JSON.stringify(user);
    setMovies(moviesCopy);
  };

  const unRent = (movieID) => {
    let moviesCopy = [...movies];
    let movie = moviesCopy.find((movie) => movie.id == movieID);
    movie.isRented = false;
    setBudget(budget + 3);
    user.budget += 3;
    let movieIndex = user.rentedMoviesIDs.findIndex((id) => id == movieID);
    user.rentedMoviesIDs.splice(movieIndex, 1);
    localStorage[userID] = JSON.stringify(user);
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
        <input
          id="search-input"
          type="text"
          value={searchMovie}
          placeholder="Search"
          onChange={updateSearchMovie}
        ></input>
        <span id="budget">Budget: ${budget}.00</span>
      </div>
      {rentedMovies.length !== 0 ? (
        <MoviesList
          movies={rentedMovies}
          catalogTitle={"Rented"}
          rent={rent}
          unRent={unRent}
        />
      ) : (
        <></>
      )}
      <MoviesList
        movies={movies}
        catalogTitle={"Catalog"}
        rent={rent}
        unRent={unRent}
      />
    </div>
  );
}

export default Catalog;
