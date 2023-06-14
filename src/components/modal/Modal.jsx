import React, { Component } from 'react';

export class Modal extends Component {
    componentDidMount() {
      window.addEventListener('keydown', this.handleKeyDown);
    }
  
    componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeyDown);
    }
  
    handleKeyDown = (event) => {
      const { onClose } = this.props;
      if (event.code === 'Escape') {
        onClose();
      }
    };
  
    handleOverlayClick = (event) => {
      const { onClose } = this.props;
      if (event.target === event.currentTarget) {
        onClose();
      }
    };
  
    render() {
      const { children } = this.props;
      return (
        <div className="overlay" onClick={this.handleOverlayClick}>
          <div className="modal">{children}</div>
        </div>
      );
    }
  }