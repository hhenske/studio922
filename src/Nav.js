import React, { useContext } from 'react';
import { MovieListContext } from './MovieListContext';

const Nav = () => {
    const [movies, setMovies] = useContext(MovieListContext);

    return(
        <div>
            <h3>Dev Ed</h3>
            <p>List of Movies: {movies.length}</p>
        </div>
    );
};

export default Nav;
