import MoviesCard from "./MoviesCard";

const movies = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    genre: "Science Fiction",
    release_year: 2010,
    image: "http://localhost:3000/img/movies_cover/inception.jpg",
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    genre: "Crime",
    release_year: 1972,
    image: "http://localhost:3000/img/movies_cover/the_godfather.jpg",
  },
  {
    id: 3,
    title: "Titanic",
    director: "James Cameron",
    genre: "Romance",
    release_year: 1997,
    image: "http://localhost:3000/img/movies_cover/titanic.jpg",
  },
  {
    id: 4,
    title: "The Matrix",
    director: "The Wachowskis",
    genre: "Action",
    release_year: 1999,
    image: "http://localhost:3000/img/movies_cover/matrix.jpg",
  },
  {
    id: 5,
    title: "Interstellar",
    director: "Christopher Nolan",
    genre: "Science Fiction",
    release_year: 2014,
    image: "http://localhost:3000/img/movies_cover/interstellar.jpg",
  },
];

export default function MoviesList() {
  return (
    <div className="container my-5">
      <div className="row row-cols-3 g-3">
        {movies.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
