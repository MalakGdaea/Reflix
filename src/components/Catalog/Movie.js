import "./Movie.css";
import { Link } from "react-router-dom";

function Movie({ movie, action }) {
  return (
    <div className="movie-box">
      <Link to={`/catalog/${movie.id}`}>
        <img className="movieImg" src={movie.img} />
      </Link>
      {movie.isRented ? (
        <i onClick={() => action("unrent", movie.id)} className="material-icons icon"> remove_circle</i>
      ) : (
        <i onClick={() => action("rent", movie.id)} className="material-icons icon"> add_circle</i>
      )}
    </div>
  );
}

export default Movie;
