import { PropTypes } from 'prop-types';
import React from 'react';

const ImageGalleryItem = ({ cardUrl, alt, onClick }) => (
  <li className="ImageGalleryItem" onClick={onClick}>
    <img
      src={cardUrl}
      alt={alt}
      className="ImageGalleryItem-image"
      loading="lazy"
    />
  </li>
);

ImageGalleryItem.propTypes = {
  cardUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
