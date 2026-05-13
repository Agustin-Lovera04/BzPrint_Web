import { useState } from "react"
import './Gallery_Prod_Detail_Style.css'
const Gallery_Prod_Detail = ({images}) => {
  const [mainImage, setMainImage] = useState(images[0])
return (
    <div className="gallery-container">
      <div className="thumbnails">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail-item ${mainImage === image ? 'active' : ''}`}
            onClick={() => setMainImage(image)}
          >
            <img src={image} alt={`Miniatura ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="main-image">
        <img src={mainImage} alt="Imagen principal del producto" />
      </div>
    </div>
  );
}

export default Gallery_Prod_Detail