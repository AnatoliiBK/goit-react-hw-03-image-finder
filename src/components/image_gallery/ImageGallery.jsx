import React, { Component } from 'react';
import { ImageGalleryItem } from "components/image_item/ImageGalleryItem";
import { nanoid } from 'nanoid';

export class ImageGallery extends Component {
  state = {
    showNoImagesMessage: false,
    isLoading: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.images !== this.props.images) {
      this.checkNoImagesMessage();
    }
  }

  checkNoImagesMessage() {
    const { images } = this.props;
    const { showNoImagesMessage } = this.state;

    if (images.length === 0 && !showNoImagesMessage) {
      this.showNoImagesMessageWithDelay();
    } else if (images.length > 0 && showNoImagesMessage) {
      this.hideNoImagesMessage();
    }
  }

  showNoImagesMessageWithDelay() {
    this.setState({ isLoading: true });

    setTimeout(() => {
      this.setState({
        showNoImagesMessage: true,
        isLoading: false,
      });
    }, 3000);
  }

  hideNoImagesMessage() {
    this.setState({ showNoImagesMessage: false });
  }

  render() {
    const { images, onImageClick } = this.props;
    const { showNoImagesMessage, isLoading } = this.state;

    if (images.length === 0 && showNoImagesMessage) {
      return <p className="noImages">No images found.</p>;
    }

    return (
      <div>
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
        {isLoading && <p>Loading...</p>}
      </div>
    );
  }
}




// export class ImageGallery extends Component {
//   state = {
//     showNoImagesMessage: false,
//   };

//   componentDidUpdate(prevProps) {
//     if (prevProps.images !== this.props.images) {
//       this.checkNoImagesMessage();
//     }
//   }

//   checkNoImagesMessage() {
//     const { images } = this.props;
//     const { showNoImagesMessage } = this.state;

//     if (images.length === 0 && !showNoImagesMessage) {
//       this.showNoImagesMessageWithDelay();
//     } else if (images.length > 0 && showNoImagesMessage) {
//       this.hideNoImagesMessage();
//     }
//   }

//   showNoImagesMessageWithDelay() {
//     setTimeout(() => {
//       this.setState({ showNoImagesMessage: true });
//     }, 3000);
//   }

//   hideNoImagesMessage() {
//     this.setState({ showNoImagesMessage: false });
//   }

//   render() {
//     const { images, onImageClick } = this.props;
//     const { showNoImagesMessage } = this.state;

//     if (images.length === 0 && showNoImagesMessage) {
//       return <p className="noImages">No images found.</p>;
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
//   state = {
//     showNoImagesMessage: false,
//     isLoading: true,
//   };

//   componentDidMount() {
//     this.fetchImages();
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.images !== this.props.images) {
//       this.fetchImages();
//     }
//   }

//   fetchImages() {
//     const { images } = this.props;

//     this.setState({ isLoading: true });

//     // Імітуємо запит до бекенду
//     setTimeout(() => {
//       this.setState({ isLoading: false });

//       if (images.length === 0) {
//         setTimeout(() => {
//           this.setState({ showNoImagesMessage: true });
//         }, 1000);
//       } else {
//         this.setState({ showNoImagesMessage: false });
//       }
//     }, 200);
//   }

//   render() {
//     const { images, onImageClick } = this.props;
//     const { showNoImagesMessage, isLoading } = this.state;

//     if (isLoading) {
//       return <p>Loading...</p>; // Показати повідомлення про завантаження
//     }

//     if (images.length === 0 && showNoImagesMessage) {
//       return <p className="noImages">No images found.</p>; // Показати повідомлення про відсутність зображень
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
//   state = {
//     showNoImagesMessage: false,
//   };

//   componentDidMount() {
//     const { images } = this.props;
//     if (images.length === 0) {
//       setTimeout(() => {
//         this.setState({ showNoImagesMessage: true });
//       }, 3000);
//     }
//   }

//   render() {
//     const { images, onImageClick } = this.props;
//     const { showNoImagesMessage } = this.state;

//     if (images.length === 0 && showNoImagesMessage) {
//       return <p className="noImages">No images found.</p>;
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
//   state = {
//     showNoImagesMessage: false,
//   };

//   componentDidMount() {
//     const { images } = this.props;
//     if (images.length === 0) {
//       this.showNoImagesMessageWithDelay();
//     }
//   }

//   componentDidUpdate(prevProps) {
//     const { images } = this.props;
//     if (images.length === 0 && prevProps.images.length !== 0) {
//       this.showNoImagesMessageWithDelay();
//     } else if (images.length > 0 && prevProps.images.length === 0) {
//       this.hideNoImagesMessage();
//     }
//   }

//   showNoImagesMessageWithDelay() {
//     setTimeout(() => {
//       this.setState({ showNoImagesMessage: true });
//     }, 2000);
//   }

//   hideNoImagesMessage() {
//     this.setState({ showNoImagesMessage: false });
//   }

//   render() {
//     const { images, onImageClick } = this.props;
//     const { showNoImagesMessage } = this.state;

//     if (images.length === 0 && showNoImagesMessage) {
//       return <p className="noImages">No images found.</p>;
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