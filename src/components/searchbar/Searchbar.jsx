import React, { Component } from 'react';



export class Searchbar extends Component {
    handleSubmit = (event) => {
      event.preventDefault();
      const { onSubmit } = this.props;
      const searchInput = event.target.elements.searchInput.value;
      onSubmit(searchInput);
    };
  
    render() {
      return (
        <header className="searchbar">
          <form className="form" onSubmit={this.handleSubmit}>
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>
  
            <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              name="searchInput"
            />
          </form>
        </header>
      );
    }
  }