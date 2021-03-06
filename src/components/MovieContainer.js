import * as React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core";

import API from '../utils/API';
import MovieList from './pages/MovieList';

import SearchAppBar from './searchbar';
import Footer from "./Footer";

const contentStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "45px",
    minHeight: "calc(100vh - 288px)",
    width: "100%",
    [theme.breakpoints.down('sm')]: {
      minHeight: "calc(100vh - 250px)",
    },
  },
  noResults: {
    fontSize: "3rem",
    textAlign: "center",
  }
}));

export default function MovieContainer() {
  const { content, noResults } = contentStyles();

  const [result, setResult] = useState({});
  const [search, setSearch] = useState('');

  const searchMovie = (query) =>
    API.search(query)
      .then((res) => setResult(res.data.results))
      .catch((err) => console.log(err));

  useEffect(() => {
    searchMovie('Holiday');
  }, []);

  const handleInputChange = (e) => setSearch(e.target.value);

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleFormSubmit(e)
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchMovie(search);
  };

  return (
    <div><SearchAppBar
      handleFormSubmit={handleFormSubmit}
      handleInputChange={handleInputChange}
      handleKeypress={handleKeypress} 
      />
      <div className={content}>
        {result.length ? <MovieList result={result} /> : <h2 className={noResults}>No results were found.<br /> Please try searching for something else to watch!</h2>}    
      </div>
      <Footer />
    </div>
  )
};