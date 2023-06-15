import React, { Component } from 'react';
import { ImageGalleryItem } from "components/image_item/ImageGalleryItem";
import { nanoid } from 'nanoid';


export class ImageGallery extends Component {
  state = {
    showNoImagesMessage: false,
  };

  componentDidMount() {
    const { images } = this.props;
    if (images.length === 0) {
      this.showNoImagesMessageWithDelay();
    }
  }

  componentDidUpdate(prevProps) {
    const { images } = this.props;
    if (images.length === 0 && prevProps.images.length !== 0) {
      this.showNoImagesMessageWithDelay();
    } else if (images.length > 0 && prevProps.images.length === 0) {
      this.hideNoImagesMessage();
    }
  }

  showNoImagesMessageWithDelay() {
    setTimeout(() => {
      this.setState({ showNoImagesMessage: true });
    }, 2000);
  }

  hideNoImagesMessage() {
    this.setState({ showNoImagesMessage: false });
  }

  render() {
    const { images, onImageClick } = this.props;
    const { showNoImagesMessage } = this.state;

    if (images.length === 0 && showNoImagesMessage) {
      return <p className="noImages">No images found.</p>;
    }

    return (
      <ul className="gallery">
        {images.map((image) => (
          <ImageGalleryItem
            key={nanoid()}
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
            alt={image.alt}
            onClick={() => onImageClick(image.largeImageURL)}
          />
        ))}
      </ul>
    );
  }
}


// export class ImageGallery extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showAlert: false,
//     };
//   }

//   componentDidMount() {
//     const { images } = this.props;
//     if (images.length === 0) {
//       this.showAlertWithDelay();
//     }
//   }

//   componentDidUpdate(prevProps) {
//     const { images } = this.props;
//     if (images.length === 0 && prevProps.images.length !== 0) {
//       this.showAlertWithDelay();
//     } else if (images.length > 0 && prevProps.images.length === 0) {
//       this.hideAlert();
//     }
//   }

//   showAlertWithDelay() {
//     setTimeout(() => {
//       this.setState({ showAlert: true });
//       alert("No images found.");
//     }, 2000);
//   }

//   hideAlert() {
//     this.setState({ showAlert: false });
//   }

//   render() {
//     const { images, onImageClick } = this.props;
//     const { showAlert } = this.state;

//     if (images.length === 0 && showAlert) {
//       return null;
//     }

//     return (
//       <ul className="gallery">
//         {images.map((image) => (
//           <ImageGalleryItem
//             key={nanoid()}
//             webformatURL={image.webformatURL}
//             largeImageURL={image.largeImageURL}
//             alt={image.alt}
//             onClick={() => onImageClick(image.largeImageURL)}
//           />
//         ))}
//       </ul>
//     );
//   }
// }


// export class ImageGallery extends Component {
//   render() {
//     const { images, onImageClick } = this.props;
//     if (images.length === 0) {
//       return <p className='noImages'>No images found.</p>;
//     }
//     return (
//       <ul className="gallery">
//         {images.map((image) => (
//           <ImageGalleryItem
//             key={nanoid()}
//             webformatURL={image.webformatURL}
//             largeImageURL={image.largeImageURL}
//             alt={image.alt}
//             onClick={() => onImageClick(image.largeImageURL)}
//           />
//         ))}
//       </ul>
//     );
//   }
// }

// export class ImageGallery extends Component {
//   render() {
//     const { images, onImageClick } = this.props;

//     if (images.length === 0) {
//       return <p>No images found.</p>;
//     }

//     return (
//       <ul className="gallery">
//         {images.map((image) => (
//           <ImageGalleryItem
//             key={nanoid()}
//             imageUrl={image.url}
//             alt={image.alt}
//             onClick={() => onImageClick(image.url)}
//           />
//         ))}
//       </ul>
//     );
//   }
// }



// export class ImageGallery extends Component {
//     render() {
//       const { images, onImageClick } = this.props;
//       return (
//         <ul className="gallery">
//           {images.map((image) => (
//             <ImageGalleryItem
//             key={nanoid()}
//               imageUrl={image.url}
//               alt={image.alt}
//               onClick={() => onImageClick(image.url)}
//             />
//           ))}
//         </ul>
//       );
//     }
//   }