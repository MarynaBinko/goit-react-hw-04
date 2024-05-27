

import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import Header from './components/Header/Header'
import ImageGallery from './components/ImageGallery/ImageGallery'
import ImageModal from './components/ImageModal/ImageModal'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import Loader from './components/Loader/Loader'
import { fetchImagesApi } from "./images-api";

import './App.css'
import { useState } from 'react'

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

 
    const onSearch = async (topic) => {
      try {
      setImages([]);
      setError(false);
        setLoading(true);
        const data = await fetchImagesApi (topic);
        setImages(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };


  return (
    <>
    <Header onSearch={onSearch}/>
    <LoadMoreBtn/>  
    {loading && <p>Loading data, please wait...</p>}
    {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
    {images.length > 0 && <ImageGallery images={images}/>}
    <Loader/>
    <ErrorMessage/>
    <ImageModal/>
    </>
  )
}

export default App
