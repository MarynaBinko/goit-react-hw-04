// import styles from "./ImageCard.module.css"

const ImageCard = ({ src, srcSet, alt, openModal  }) => {
  return (
    <div>
        <img src={src} alt={alt} onClick={() => openModal({srcSet})}/>
            </div>
  )
}

export default ImageCard
