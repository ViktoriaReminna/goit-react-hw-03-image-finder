import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Window } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.key === 'Escape') {
      return;
    }
    this.props.onClose();
  };

  clickBackdrop = event => {
    console.log(event.target);
    console.log(event.currentTarget);
    if (event.target !== event.currentTarget) {
      return;
    }
    this.props.onClose();
  };

  render() {
    const { src, alt } = this.props;
    return createPortal(
      <Backdrop onClick={this.clickBackdrop}>
        <Window>
          <img src={src} alt={alt} />
        </Window>
      </Backdrop>,
      document.querySelector('#modal-root')
    );
  }
}
