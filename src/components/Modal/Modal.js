import React, { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { isOpen, imageUrl, alt, onClose } = this.props;

    if (!isOpen) {
      return null;
    }

    return (
      <div className="overlay" onClick={onClose}>
        <div className="modal">
          <img src={imageUrl} alt={alt} />
        </div>
      </div>
    );
  }
}
