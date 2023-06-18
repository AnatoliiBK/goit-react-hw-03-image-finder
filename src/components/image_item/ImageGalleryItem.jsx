import React, { Component } from 'react';
import PropTypes from "prop-types";


export class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, alt, onClick } = this.props;
    return (
      <li className="gallery-item" onClick={onClick}>
        <img src={webformatURL} alt={alt} className='imageGalleryItem-image' />
      </li>
    );
  }
}


ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

