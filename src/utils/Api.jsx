import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.headers.get['Content-Type'] = 'application/json; charset=utf-8';

const KEY = '28585482-8d735cdf78dd1d9af167cad96';

const options = '&image_type=photo&orientation=horizontal';

const fetchImages = async (searchQuery, page) => {
  const url = `?key=${KEY}&q=${searchQuery}${options}&per_page=12&page=${page}`;

  const { data } = await axios.get(url);
  return data;
};

const api = {
  fetchImages,
};

export default api;
