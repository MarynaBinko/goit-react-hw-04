
import './App.css'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import Header from './components/Header/Header'

import ImageGallery from './components/ImageGallery/ImageGallery'
import ImageModal from './components/ImageModal/ImageModal'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import Loader from './components/Loader/Loader'


function App() {
  

  return (
    <>
    <Header/>
    <LoadMoreBtn/>   
    <ImageGallery/>  
    <Loader/>
    <ErrorMessage/>
    <ImageModal/>
    </>
  )
}

export default App
