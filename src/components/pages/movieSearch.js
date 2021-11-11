import { useState, useEffect } from 'react';
import MovieList from './MovieList';

import search from '../utils/API';

export default function SearchMovieContainer() {
  const [movies, setMovies] = useState([]);

  const searchMovie = async (query) => {
    const response = await search(query);
    setMovies(response.data.data)
  };

  useEffect(() => {
    searchMovie('Batman');
  }, []);

  return (
    <div>
      {console.log('I am so tired')}
      <MovieList movies={movies} />
    </div>
  )
}