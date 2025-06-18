import { useParams } from "react-router-dom";
import ReviewsList from "../components/ReviewsList";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MoviesDetailPage() {
  const { id } = useParams();

  const apiUrl = import.meta.env.VITE_API_URL + "/movies/" + id;

  const [movie, setMovie] = useState();

  const fecthMovie = () => {
    axios.get(apiUrl).then((res) => {
      setMovie(res.data.data);
      console.log(res.data.data);
    });
  };

  useEffect(fecthMovie, []);

  return (
    <>
      <h1>Dettaglio film {id}</h1>
      {movie ? (
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

          <ReviewsList reviews={movie.reviews} />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
