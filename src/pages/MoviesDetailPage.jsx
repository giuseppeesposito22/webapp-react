import { useParams } from "react-router-dom";
import ReviewsList from "../components/ReviewsList";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLoader } from "../contexts/LoaderContext";

export default function MoviesDetailPage() {
  const { id } = useParams();

  const apiUrl = import.meta.env.VITE_API_URL + "/movies/" + id;

  const [movie, setMovie] = useState();

  const { setIsLoading } = useLoader();

  const fecthMovie = () => {
    setIsLoading(true);
    axios.get(apiUrl).then((res) => {
      setMovie(res.data.data);
      setIsLoading(false);
    });
  };

  useEffect(fecthMovie, []);

  return (
    <>
      <h1>Dettaglio film {id}</h1>
      {movie && (
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
      )}
    </>
  );
}
