import "./MovieList.css";
import Movie from "./Movie";

function MoviesList({ movies, catalogTitle, action }) {
  return (
    <div>
      <h4 className="catagoryTitle">{catalogTitle}</h4>
      <div className="movies-list">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} action={action} />
        ))}
      </div>
    </div>
  );
}
export default MoviesList;
