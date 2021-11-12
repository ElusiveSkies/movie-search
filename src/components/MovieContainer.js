import * as React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core";

import API from '../utils/API';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';

// import Nav from './Nav';
import SearchAppBar from './searchbar';
import Footer from "./Footer";

const contentStyles = makeStyles((theme) => ({
  content: {
    // paddingTop: "45px",
    minHeight: "calc(100vh - 288px)",
    [theme.breakpoints.down('sm')]: {
      minHeight: "calc(100vh - 250px)",
    },
  },
}));

export default function MovieContainer() {
  const { content } = contentStyles();

  const [result, setResult] = useState({});
  const [search, setSearch] = useState('');

  //   When the search form is submitted, use the API.search method to search for the movie(s)
  const searchMovie = (query) =>
    API.search(query)
      .then((res) => setResult(res.data.results))
      .catch((err) => console.log(err));

  // When the component loads, use the API.search method to render a default search result
  // The empty optional array [] will cause the hook to only run one time after the component loads
  // Refer to https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
  useEffect(() => {
    searchMovie('The Matrix');
  }, []);

  // Handler for input changes to the search form
  const handleInputChange = (e) => setSearch(e.target.value);

  // Handler for what happens when the search form is submitted
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    searchMovie(search);
  };

  return (
    <div><SearchAppBar
      handleFormSubmit={handleFormSubmit}
      handleInputChange={handleInputChange} />
      <div className={content}>
        {result ? <MovieList result={result} /> : null}    
      </div>
      <Footer />
    </div>
  )
};