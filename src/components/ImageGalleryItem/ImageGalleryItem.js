import React from 'react';

export const ImageGalleryItem = ({ imageUrl, alt, onClick }) => {
  return (
    <li className="gallery-item" onClick={() => onClick(imageUrl)}>
      <img src={imageUrl} alt={alt} />
    </li>
  );
};
