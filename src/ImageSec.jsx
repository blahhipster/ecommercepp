import { useState } from 'react'


const ImageGallery = () =>{
    const highResImages = [
        "/images/high-res/IMG 1.jpg",
        "/images/high-res/IMG 2.jpg",
        "/images/high-res/IMG 3.jpg",
        "/images/high-res/IMG 4.jpg",
      ];
      const thumbnailImages = [
        "/images/thumbnails/IMG 1_T.jpg",
        "/images/thumbnails/IMG 2_T.jpg",
        "/images/thumbnails/IMG 3_T.jpg",
        "/images/thumbnails/IMG 4_T.jpg",
      ];

    const[selectedImage, setSelectedImage] = useState(highResImages[0]);

    const handleThumbnailClick = (index)=>{
        setSelectedImage(highResImages[index]);
    };

    return(
        <div className='gallery'>
            <div className="mainImage">
                <img src={selectedImage} alt="High resolution preview" />
            </div>
            <div className="thumbnails">
                {thumbnailImages.map((thumbnail, index)=>(
                    <img key={index} src={thumbnail} alt={index} className={highResImages[index] === selectedImage? "active" : ""} onClick={() => handleThumbnailClick(index)}/>
                ))}
            </div>
        </div>
    )
}

export default ImageGallery;


