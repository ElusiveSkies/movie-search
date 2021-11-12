import React from 'react';

// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function MovieList(props) {
  // console.log(props.result[0].title);
  // props.result.map((movies) => console.log(movies.poster_path))

  return (
    <ul className="list-group">
      {props.result.map((movies) => (
        <li className="list-group-item" key={movies.id}>
          <img
            alt={movies.title}
            className="img-fluid"
            src={"https://image.tmdb.org/t/p/original/"+movies.poster_path}
          />
        </li>
      ))}
    </ul>
  
    ); 
}

export default MovieList;
