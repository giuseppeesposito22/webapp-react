import { useParams } from "react-router-dom";
import ReviewsList from "../components/ReviewsList";

const movie = {
  id: 1,
  title: "Inception",
  director: "Christopher Nolan",
  genre: "Science Fiction",
  release_year: 2010,
  abstract:
    "A skilled thief is given a chance at redemption if he can successfully perform inception.",
  image: "http://localhost:3000/img/movies_cover/inception.jpg",
};

export default function MoviesDetailPage() {
  const { id } = useParams();

  return (
    <>
      <h1>Dettaglio film {id}</h1>

      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="card">
              <img src={movie.image} alt="" />
            </div>
          </div>
          <div className="col-7">
            <p>{movie.title}</p>
            <p>{movie.director}</p>
            <p>{movie.genre}</p>
            <p>{movie.release_year}</p>
          </div>
        </div>

        <section className="my-5">{movie.abstract}</section>

        <ReviewsList />
      </div>
    </>
  );
}
