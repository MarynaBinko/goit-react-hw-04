// import styles from "./ImageCard.module.css"

const ImageCard = ({ smallSrc, alt }) => {
  return (
    <div>
        <img src={smallSrc} alt={alt} />
    </div>
  )
}

export default ImageCard
