import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://picsum.photos',
});

export default instance;
