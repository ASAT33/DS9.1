
import React, { useState } from 'react';


const Carrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://cdn.shopify.com/s/files/1/0271/8960/8525/files/5_verduras_que_te_ayudaran_a_bajar_de_peso_480x480.jpg?v=1675103142 ',
    'https://www.eluniverso.com/resizer/0EQqti_WOEXjQbi-bUqniSrX-BM=/1072x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/COAATDZBOREGXDG6WITTRXVASQ.jpg',
    'https://www.nacion.com/resizer/hILkDzM8O3866W4DTfDbvwVK954=/1440x0/filters:format(jpg):quality(70)/arc-anglerfish-arc2-prod-gruponacion.s3.amazonaws.com/public/BKUG5EDHL5EN3GOOCR4SJWYWCI.jpg',
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carrousel">
      <button onClick={prevSlide} className="carrousel-button prev-button">‹</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carrousel-image" />
      <button onClick={nextSlide} className="carrousel-button next-button">›</button>
    </div>
  );
};

export default Carrousel;
