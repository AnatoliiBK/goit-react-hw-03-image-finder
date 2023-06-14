import React, { Component } from 'react';
import { ImageGalleryItem } from "components/image_item/ImageGalleryItem";
import { nanoid } from 'nanoid';

export class ImageGallery extends Component {
    render() {
      const { images, onImageClick } = this.props;
      return (
        <ul className="gallery">
          {images.map((image) => (
            <ImageGalleryItem
            key={nanoid()}
              imageUrl={image.url}
              alt={image.alt}
              onClick={() => onImageClick(image.url)}
            />
          ))}
        </ul>
      );
    }
  }