import axios from 'axios';

const { REACT_APP_BASEURL, REACT_APP_APIKEY } = process.env;

const search = (query) =>
  axios.get(`${REACT_APP_BASEURL}${REACT_APP_APIKEY}&query=${query}`);

export default { search };
