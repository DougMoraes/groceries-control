import axios from 'axios';

export default axios.create({
  baseURL: 'https://dougclacla-groceries-api.herokuapp.com/',
});