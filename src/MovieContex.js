import React, { createContext, useState } from "react";

export const MovieContex = createContext();

export const MovieProvider = (props) => {
  const [movie, setmovie] = useState([
    {
      name: "kafshhayam ko?",
      price: "10T",
      id: "1",
    },
    {
      name: "witcher",
      price: "15T",
      id: "12",
    },
    {
      name: "inception",
      price: "45T",
      id: "3",
    },
  ]);
  return (
    <MovieContex.Provider value={[movie, setmovie]}>
      {props.children}
    </MovieContex.Provider>
  );
};
