import { useState, useEffect } from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './Container/Container';
import ImageGallary from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import fetchImages from '../services/Api';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';


function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!query) return;

    const searchImages = async () => {
      try {
        const request = await fetchImages(query, page);
        if (request.length === 0) {
          return setError(`No found ${query}`);
        }
        setImages(prevImages => [...prevImages, ...request]);
      } catch (error) {
        setError('Oops! Something went wrong')
      } finally {
        setIsLoading(false);
      }
    };

    searchImages();
  }, [page, query]);

  const handleSubmit = newSearch => {
    setQuery(newSearch);
    setImages([]);
    setPage(1);
    setError(null);
    setIsLoading(true);
  };

  const onLoadMore = () => {
    setIsLoading(true);
    setPage(prevPage => prevPage + 1);
  };

  const onOpenModal = evt => {
    setLargeImageURL(evt.target.dataset.source);
    toggleModal(!isLoading);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Container>
      <Searchbar
       onHandleSubmit={handleSubmit}
      />
    {error}
    {images.length > 0 && !error && (
      <ImageGallary images={images} error={error} onOpenModal={onOpenModal} />
    )}
      {isLoading && <Loader />}

    {!isLoading && images.length >= 12 && !error &&
        (<Button onLoadMore={onLoadMore} />)}
      
    {showModal && (
         <Modal onToggleModal={toggleModal}
          largeImageURL={largeImageURL} />
        )}
         <ToastContainer autoClose={2500} />
  </Container>
 )
};

export default App;