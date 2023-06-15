import React, { Component } from 'react';

export class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, alt, onClick } = this.props;
    return (
      <li className="gallery-item" onClick={onClick}>
        <img src={webformatURL} alt={alt} loading="lazy" />
      </li>
    );
  }
}


// export class ImageGalleryItem extends Component {
//     render() {
//       const { imageUrl, alt, onClick } = this.props;
//       return (
//         <li className="gallery-item" onClick={onClick}>
//           <img src={imageUrl} alt={alt} width={"300"} height={"200"}/>
//         </li>
//       );
//     }
//   }


