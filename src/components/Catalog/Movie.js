import "./Movie.css";
import { Link } from "react-router-dom";

function Movie({ movie, action }) {
  return (
    <div>
      <Link to={`/catalog/${movie.id}`}>
        <img className="movieImg" src={movie.img} />
      </Link>
      {movie.isRented ? (
        <button onClick={() => action("unrent", movie.id)}>-</button>
      ) : (
        <button onClick={() => action("rent", movie.id)}>+</button>
      )}
    </div>
  );
}

export default Movie;
