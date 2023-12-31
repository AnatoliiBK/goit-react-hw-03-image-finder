import React, { Component } from 'react';
import axios from 'axios';
import { Puff } from 'react-loader-spinner';

import { Searchbar } from "./searchbar/Searchbar"
import { ImageGallery } from './image_gallery/ImageGallery';
import { Button } from './button/Button';
import { Modal } from './modal/Modal';

import PropTypes from "prop-types";

import "../components/styles.css"


export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    currentPage: 1,
    totalHits: 0,
    isLoading: false,
    showModal: false,
    modalImage: '',
  };

  componentDidMount() {
    const { searchQuery } = this.state;
    this.fetchImages(searchQuery);
  }

  fetchImages = async (query) => {
    this.setState({ isLoading: true });

    try {
      const apiKey = '35870886-75af865edd7f3268a0fe2e3e2';
      const response = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=${this.state.currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
      );

      this.setState((prevState) => ({
        images: [...prevState.images, ...response.data.hits],
        currentPage: prevState.currentPage + 1,
        totalHits: response.data.totalHits,
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
      alert('Error fetching images');
    }

    this.setState({ isLoading: false });
  };

  handleSearchSubmit = (query) => {
    this.setState({ searchQuery: query, images: [], currentPage: 1 }, () => {
      this.fetchImages(query);
    });
  };

  handleImageClick = (imageUrl) => {
    this.setState({ showModal: true, modalImage: imageUrl });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, modalImage: '' });
  };

  render() {
    const { images, isLoading, showModal, modalImage, totalHits } = this.state;

    const showLoadMoreButton = images.length < totalHits;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {isLoading && (
          <div className="puff-container">
            <Puff color="#00BFFF" height={80} width={80} />
          </div>
        )}
        {showLoadMoreButton && (
          <Button onClick={() => this.fetchImages(this.state.searchQuery)}>
            Load more
          </Button>
        )}
        {showModal && (
          <Modal onClose={this.handleCloseModal}>
            <img src={modalImage} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}

App.propTypes = {
  searchQuery: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.object),
  currentPage: PropTypes.number,
  totalHits: PropTypes.number,
  isLoading: PropTypes.bool,
  showModal: PropTypes.bool,
  modalImage: PropTypes.string,
};