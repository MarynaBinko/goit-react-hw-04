// import styles from "./ImageCard.module.css"

const ImageCard = ({ src, srcSet, alt  }) => {
  return (
    <div>
        <img src={src} alt={alt} />
    </div>
  )
}

export default ImageCard
