import React, {Component, PropTypes} from 'react';
import {Modal, ModalBody, ModalHeader} from 'elemental';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal() {
    this.props.handleClick();
  }

  render() {
    const googleUrl = "http://potencia.pythonballz.com:80/api/v1/auth/google";

    return (
      <Modal isOpen={this.props.isOpen} onCancel={this.props.handleClick} backdropClosesModal width={'small'}>
        <ModalHeader text="" showCloseButton onClose={this.props.handleClick}/>
        <ModalBody>
          <form>
            <div className="message">
              <h2 className="title">Login</h2>
              <p>Ingresa a Potencia y conoce todos los medios<br/> para tu clase.</p>
            </div>
            <div className="field-group">
              <input type="email" ref="name" placeholder="Escribe tu correo"/>
              <span className="error-msg">El correo es requerido.</span>
            </div>
            <div className="field-group">
              <input type="password" ref="email" placeholder="Escribe tu contraseña"/>
              <span className="error-msg">La contraseña es requerida.</span>
            </div>
          </form>
          <div className="button-bar">
            <button className="primary" type="button" onClick={this.handleCloseModal}>Enviar</button>
            <a href={googleUrl} className="googleButton">
              <span className="googleButton-icon"></span>
              <span className="googleButton-text">Inicia sesión</span>
            </a>
          </div>
        </ModalBody>
      </Modal>

    );
  }
}

Login.propTypes = {
  handleClick: PropTypes.func,
  isOpen: PropTypes.bool
};
