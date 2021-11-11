import React from 'react';

// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function MovieList(props) {
  return (
    <ul className="list-group">
      {props.results.map((movies) => (
        <li className="list-group-item" key={movies.id}>
          <img
            alt={movies.title}
            className="img-fluid"
            src={movies.images.original.url}
          />
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
