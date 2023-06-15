import React, { Component } from 'react';

export class Button extends Component {
    render() {
      const { onClick, children } = this.props;
      return <button className='button_load' onClick={onClick}>{children}</button>;
    }
  }