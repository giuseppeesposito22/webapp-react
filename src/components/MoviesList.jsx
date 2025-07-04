import { useEffect, useState } from "react";
import MoviesCard from "./MoviesCard";
import axios from "axios";
import { useLoader } from "../contexts/LoaderContext";

const apiUrl = import.meta.env.VITE_API_URL + "/movies";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  const { setIsLoading } = useLoader();

  const fetchMovies = () => {
    setIsLoading(true);
    axios.get(apiUrl).then((res) => {
      setMovies(res.data.data);
      setIsLoading(false);
    });
  };

  useEffect(fetchMovies, []);

  return (
    <>
      {movies && (
        <div className="container my-5">
          <div className="row row-cols-3 g-3">
            {movies.map((movie) => (
              <MoviesCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
