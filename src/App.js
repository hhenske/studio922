import MovieList from './MovieList'
import './App.css';
import {MovieProvider} from './MovieListContext';
import {movieListContext} from './MovieListContext';
import Nav from './Nav';
import AddMovie from './AddMovie';

function App() {

  return (
    <MovieProvider>
    <div className="App">
      <Nav />
      <AddMovie />
      <MovieList />
    </div>
    </MovieProvider>
  );
}

export default App;
