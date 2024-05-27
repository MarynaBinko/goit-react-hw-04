
import { useState } from 'react';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Header from './components/Header/Header';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import { fetchImagesApi } from './images-api';

import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [topic, setTopic] = useState('');

  const onSearch = async (newTopic) => {
    setTopic(newTopic);
    setPage(1);
    setImages([]);
    fetchImages(newTopic, 1);
  };

  const fetchImages = async (topic, page) => {
    try {
      setError(false);
      setLoading(true);
      const data = await fetchImagesApi(topic, page);
      setImages((prevImages) => [...prevImages, ...data]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchImages(topic, nextPage);
  };

  return (
    <>
      <Header onSearch={onSearch} />
      {images.length > 0 && <ImageGallery images={images} />}
      {loading && <Loader />}
      {error && <ErrorMessage message="Whoops, something went wrong! Please try reloading this page!" />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={loadMore} />}
      <ImageModal />
    </>
  );
}

export default App;









// import ErrorMessage from './components/ErrorMessage/ErrorMessage'
// import Header from './components/Header/Header'
// import ImageGallery from './components/ImageGallery/ImageGallery'
// import ImageModal from './components/ImageModal/ImageModal'
// import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
// import Loader from './components/Loader/Loader'
// import { fetchImagesApi } from "./images-api";

// import './App.css'
// import { useState } from 'react'

// function App() {
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [page, setPage] = useState(1);
//   const [topic, setTopic] = useState('');

//   const onSearch = async (newTopic) => {
//     setTopic(newTopic);
//     setPage(1);
//     setImages([]);
//     fetchImages(newTopic, 1);
//   };

//     const fetchImages = async (topic) => {
//       try {
//         setError(false);
//         setLoading(true);
//         const data = await fetchImagesApi(topic);
//         setImages((prevImages) => [...prevImages, ...data]);
//       } catch (error) {
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     };

//     const loadMore = () => {
//       const nextPage = page + 1;
//       setPage(nextPage);
//       fetchImages(topic, nextPage);
//     };


//   return (
//     <>
//     <Header onSearch={onSearch}/>
//     {images.length > 0 && <ImageGallery images={images}/>}
//     {loading && <Loader/>}
//     {error && <ErrorMessage message="Whoops, something went wrong! Please try reloading this page!"/>}
//     {images.length > 0 && !loading && <LoadMoreBtn onClick={loadMore} />}        
//     <ImageModal/>
//     </>
//   )
// }

// export default App
