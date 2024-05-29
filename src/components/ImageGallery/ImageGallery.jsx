import styles from "./ImageGallery.module.css"

import ImageCard from "../ImageCard/ImageCard"

const ImageGallery = ({images, openModal}) => {
  return (
    <div> 
      <ul className={styles.list} >
      {images.map(({ id, urls, alt_description }) => (
          <li key={id} className={styles.item}>
            <ImageCard src={urls.small} srcSet={urls.regular} alt={alt_description} openModal={openModal}/>
          </li>
        ))}
     </ul>
    </div>
  )
}

export default ImageGallery
