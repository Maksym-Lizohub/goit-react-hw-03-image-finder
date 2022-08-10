import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends PureComponent {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEsc);
  }

  handleEsc = event => {
    if (event.code === 'Escape') this.props.onClose();
  };

  handleOverlayClick = event => {
    if (event.currentTarget === event.target) this.props.onClose();
  };

  render() {
    const { children } = this.props;
    const { handleOverlayClick } = this;

    return createPortal(
      <div className="Overlay" onClick={handleOverlayClick}>
        <div className="Modal">{children}</div>
      </div>,
      modalRoot
    );
  }
}

/*  <div className="Overlay" onClick={this.onBackdropClick}>
        <img
          src={image.largeImageURL}
          alt={image.tags}
          className="Modal"
          loading="lazy"
        />
      </div> */

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
