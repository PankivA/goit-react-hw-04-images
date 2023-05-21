import axios from 'axios';

const fetchImages = async (query, currentPage) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=34854696-76f476cf77bb49d9dc3b4708b&image_type=photo&orientation=horizontal&per_page=12`,
  );

  return data.hits;
};

export default fetchImages;