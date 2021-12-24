import { useState, useContext } from "react";
import { MovieContex } from "./MovieContex";
export default function Addmovie() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movie, setmovie] = useContext(MovieContex);
  const addname = (e) => {
    setName(e.target.value);
  };
  const addprice = (e) => {
    setPrice(e.target.value);
  };
  const addmovies = (e) => {
    e.preventDefault();
    setmovie((prevState) => [...prevState, { name: name, price: price }]);
    setName("");
    setPrice("");
  };
  return (
    <div>
      <form onSubmit={addmovies}>
        <input name={"name"} type={"text"} value={name} onChange={addname} />
        <input
          name={"price"}
          type={"number"}
          value={price}
          onChange={addprice}
        />
        <button>submit</button>
      </form>
    </div>
  );
}
