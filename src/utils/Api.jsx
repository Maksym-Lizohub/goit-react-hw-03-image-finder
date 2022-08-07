import axios from 'axios';

const API_KEY = '28585482-8d735cdf78dd1d9af167cad96';
axios.defaults.baseURL = 'https://pixabay.com';

const getImages = (query, page) => {
  return axios
    .get('/api/', {
      params: {
        q: query,
        page: page,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
        key: API_KEY,
      },
    })
    .then(res =>
      res.data.hits.map(({ id, webformatURL, largeImageURL, tags }) => ({
        id,
        webformatURL,
        largeImageURL,
        tags,
      }))
    );
};

export default { getImages };
