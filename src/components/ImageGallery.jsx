import React from "react";

const ImageGallery = React.memo(({ images }) => {
  return (
    <section className="img-show">
      <div className="imgs-container">
        {images.map((src, index) => (
          <img key={index} src={src} alt="" loading="lazy" />
        ))}
      </div>
    </section>
  );
});

export default ImageGallery;
