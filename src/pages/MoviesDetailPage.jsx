import { useParams } from "react-router-dom";
import ReviewsList from "../components/ReviewsList";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLoader } from "../contexts/LoaderContext";
import ReviewForm from "../components/ReviewForm";

const initialFormData = {
  name: "",
  vote: 0,
  text: "",
};

export default function MoviesDetailPage() {
  const { id } = useParams();

  // api url
  const apiUrl = import.meta.env.VITE_API_URL + "/movies/" + id;
  const apiStoreUrl =
    import.meta.env.VITE_API_URL + "/movies/" + id + "/review";

  // useState
  const [movie, setMovie] = useState();
  const [formData, setFormData] = useState(initialFormData);

  // context loader
  const { setIsLoading } = useLoader();

  // funzione per il submit del form che verrà passata come prop al componente ReviewForm
  const handleReviewFormSubmit = (e) => {
    e.preventDefault();
    axios.post(apiStoreUrl, formData).then(() => {
      fecthMovie();
      setFormData(initialFormData);
    });
  };

  // funzione per il fetch dei film
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

          <ReviewForm
            formData={formData}
            setFormData={setFormData}
            handleReviewFormSubmit={handleReviewFormSubmit}
          />
        </div>
      )}
    </>
  );
}
