import { useParams } from "react-router-dom";
import { moviesData } from "../Constants";
import "./MovieDetails.css";

function MovieDetails() {
  const { movieID } = useParams();
  let movie = moviesData.find((movie) => movie.id == movieID);
  return (
    <div className="container">
      <h3>
        {movie.title} ({movie.year})
      </h3>
      <img src={movie.img} />
      <p>{movie.descrShort}</p>
    </div>
  );
}

export default MovieDetails;
