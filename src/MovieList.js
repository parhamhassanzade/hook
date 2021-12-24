import { useContext } from "react";
import { MovieContex } from "./MovieContex";
import Movie from "./Movie";
export default function MovieList() {
  const [movie, setmovie] = useContext(MovieContex);
  return (
    <div>
      {movie.map((movie) => (
        <Movie name={movie.name} price={movie.price} key={movie.id}/>
      ))}
    </div>
  );
}
