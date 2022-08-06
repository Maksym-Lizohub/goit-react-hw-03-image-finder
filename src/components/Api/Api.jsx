import axios from 'axios';

const API_KEY = '28585482-8d735cdf78dd1d9af167cad96';
const BASE_URL = 'https://pixabay.com/api/';

const getImages = (query, page) => {
  return axios
    .get(
      `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12
`
    )
    .then(res =>
      res.data.hits.map(({ id, webformatURL, largeImageURL }) => ({
        id,
        webformatURL,
        largeImageURL,
      }))
    );
};

export default { getImages };
