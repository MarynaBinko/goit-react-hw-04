// import styles from "./ImageGallery.module.css"

import ImageCard from "../ImageCard/ImageCard"

const ImageGallery = ({images}) => {
  return (
    <div> 
      <ul>
      {images.map(({ id, urls, alt_description }) => (
      <li key={id}>
              <ImageCard src={urls.small} srcSet={urls.regular} alt={alt_description}/>
      </li>
    ))}
     </ul>
    </div>
  )
}

export default ImageGallery
