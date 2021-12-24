import "./App.css";
import Nav from "./Nav";
import MovieList from "./MovieList";

import { MovieProvider } from "./MovieContex";
import Addmovie from './Addmovie';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <MovieList />
        <Addmovie/>
      </div>
    </MovieProvider>
  );
}

export default App;
