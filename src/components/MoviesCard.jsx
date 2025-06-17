import { Link } from "react-router-dom";

export default function MoviesCard({ movie }) {
  return (
    <>
      <div className="col">
        <div className="card h-100">
          <img src={movie.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">
              <span>{movie.director}</span>
              <br />
              <span>{movie.genre}</span>
              <br />
              <span>{movie.release_year}</span>
            </p>
            <Link to={`/movies/${movie.id}`} className="btn btn-primary">
              Dettaglio film
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
