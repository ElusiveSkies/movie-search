import axios from 'axios';

const { REACT_APP_BASEURL, REACT_APP_APIKEY } = process.env;

// Get queried data using axios
const search = (query) =>
  axios.get(`${REACT_APP_BASEURL}${REACT_APP_APIKEY}&language=en-US&query=${query}`);

// Export an object with a "search" method that searches TMDB for the query
export default { search };
