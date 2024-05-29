import { useState } from 'react';
import ErrorBoundary from './ErrorBoundary';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Header from './components/Header/Header';
import ImageGallery from './components/ImageGallery/ImageGallery';
// import ImageModal from './components/ImageModal/ImageModal';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
// import Loader from './components/Loader/Loader';
import { fetchImagesApi } from './images-api';
import { Audio } from 'react-loader-spinner';
import Modal from 'react-modal';

import './App.css';
import toast,  { Toaster } from 'react-hot-toast';



// _________________Modal___________________

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
     },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)', 
    },
};
Modal.setAppElement('#root'); 


// _______________________Toast___________________________

const notify = () => toast('Please enter a search term!');

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [topic, setTopic] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);


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

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Header onSearch={onSearch} notify={notify}/>
      <Toaster   toastOptions={{
          style: {
            marginTop: '80px',
          },
        }}/>
      {images.length > 0 && <ImageGallery images={images} openModal={openModal}/>}
       {loading &&  <Audio
  height="80"
  width="80"
  radius="9"
  color="orange"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>}
      {error && <ErrorMessage message="Whoops, something went wrong! Please try reloading this page!" />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={loadMore} />}
      <Modal
        isOpen={modalIsOpen}        
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Image Modal"
        shouldCloseOnOverlayClick={true} 
        shouldCloseOnEsc={true} 
      >
        {selectedImage && <img src={selectedImage.srcSet} alt={selectedImage.alt} />}
        
      </Modal>
      </>
  );
}

export default App;






// import { useState } from 'react';
// import ErrorBoundary from './ErrorBoundary';
// import ErrorMessage from './components/ErrorMessage/ErrorMessage';
// import Header from './components/Header/Header';
// import ImageGallery from './components/ImageGallery/ImageGallery';
// import ImageModal from './components/ImageModal/ImageModal';
// import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
// import Loader from './components/Loader/Loader';
// import { fetchImagesApi } from './images-api';
// import './App.css';

// import toast, { Toaster } from 'react-hot-toast';

// const notify = () => toast('Please enter a search term!');




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

//   const fetchImages = async (topic, page) => {
//     try {
//       setError(false);
//       setLoading(true);
//       const data = await fetchImagesApi(topic, page);            
//       setImages((prevImages) => [...prevImages, ...data]);
//     } catch (error) {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const loadMore = () => {
//     const nextPage = page + 1;
//     setPage(nextPage);
//     fetchImages(topic, nextPage);
//   };

//   return (
//     <ErrorBoundary>
//       <Header onSearch={onSearch} notify={notify}/>
//       <Toaster />
//       {images.length > 0 && <ImageGallery images={images} />}
//       {loading && <Loader />}
//       {error && <ErrorMessage message="Whoops, something went wrong! Please try reloading this page!" />}
//       {images.length > 0 && !loading && <LoadMoreBtn onClick={loadMore} />}
//       <ImageModal />
//     </ErrorBoundary>
//   );
// }

// export default App;






