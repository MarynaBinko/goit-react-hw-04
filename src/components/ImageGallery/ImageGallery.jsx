// import styles from "./ImageGallery.modules.css"

import ImageCard from "../ImageCard/ImageCard"

const ImageGallery = ({images}) => {
  return (
    <div>
      <ul>
	<li>
		<div>
	<ImageCard />
		</div>
	</li>
</ul>

    </div>
  )
}

export default ImageGallery
