import { PropTypes } from 'prop-types';
import React from 'react';

const ImageGalleryItem = ({ image, onImageClick }) => (
  <li
    className="ImageGalleryItem"
    onClick={() => onImageClick(image.largeImageURL)}
  >
    <img
      src={image.webformatURL}
      alt={image.tags}
      className="ImageGalleryItem-image"
    />
  </li>
);

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
