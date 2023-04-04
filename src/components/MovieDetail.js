import { useParams } from "react-router-dom";
import moviesData from "../data/movies-data";
import "./MovieDetails.css";

function MovieDetails() {
  const { movieID } = useParams();
  let selectedMovie = moviesData.find((movie) => movie.id == movieID);
  return (
    <div className="container">
      <h3>
        {selectedMovie.title} ({selectedMovie.year})
      </h3>
      <img src={selectedMovie.img} alt={selectedMovie.title} />
      <p>{selectedMovie.descrShort}</p>
    </div>
  );
}

export default MovieDetails;
