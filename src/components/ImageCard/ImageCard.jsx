import styles from "./ImageCard.module.css"

const ImageCard = ({ src, srcSet, alt, openModal  }) => {
  return (
    <div>
        <img src={src} alt={alt} onClick={() => openModal({srcSet})} className={styles.img}/>
            </div>
  )
}

export default ImageCard
