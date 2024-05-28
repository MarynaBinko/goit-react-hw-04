// import styles from "./ImageGallery.module.css"

import ImageCard from "../ImageCard/ImageCard"

const ImageGallery = ({images, openModal}) => {
  return (
    <div> 
      <ul>
      {images.map(({ id, urls, alt_description }) => (
          <li key={id} onClick={() => openModal({ src: urls.small, srcSet: urls.regular, alt: alt_description })}>
            <ImageCard src={urls.small} alt={alt_description}/>
          </li>
        ))}
     </ul>
    </div>
  )
}

export default ImageGallery
