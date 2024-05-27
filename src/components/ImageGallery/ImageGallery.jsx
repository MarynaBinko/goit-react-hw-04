// import styles from "./ImageGallery.module.css"

import ImageCard from "../ImageCard/ImageCard"

const ImageGallery = ({images}) => {
  return (
    <div>
      <ul>
      {images.map(({ objectID, src, alt }) => (
      <li key={objectID}>
              <ImageCard src={src} alt={alt}/>
      </li>
    ))}
     </ul>
    </div>
  )
}

export default ImageGallery
