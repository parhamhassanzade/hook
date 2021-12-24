import { useContext } from "react";
import { MovieContex } from "./MovieContex";
export default function Nav() {
  const [movie, setmovie] = useContext(MovieContex);
  return (
    <div>
      <h3>parham</h3>
      <p>film length:{movie.length}</p>
    </div>
  );
}
