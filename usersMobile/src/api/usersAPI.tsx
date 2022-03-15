import axios from 'axios';

const usersAPI = axios.create({
  baseURL: 'https://reqres.in/api',
});

export default usersAPI;
