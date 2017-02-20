import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Modal, ModalBody, Button, ModalHeader, ModalFooter} from 'elemental';
import config from './../config';

export class Login extends Component {

  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.props.handleClick()
  }

  render(){

    return(

      <Modal isOpen={this.props.isOpen} onCancel={this.props.handleClick} backdropClosesModal width={'small'}>
        <ModalHeader text="" showCloseButton onClose={this.props.handleClick} />
        <ModalBody>
          <form>
            <div className="message">
              <h2 className="title">Login</h2>
              <p>Ingresa a Potencia y conoce todos los medios<br /> para tu clase.</p>
            </div>
            <div className="field-group">
              <input type="email" ref="name" placeholder="Escribe tu correo"  />
              <span className="error-msg">El correo es requerido.</span>
            </div>
            <div className="field-group">
              <input type="password" ref="email" placeholder="Escribe tu contraseña"  />
              <span className="error-msg">La contraseña es requerida.</span>
            </div>
          </form>
          <div>
            <p>
              <button className="primary" type="button" onClick={this.closeModal}>Enviar</button>
            </p>  
          </div>
        </ModalBody>
      </Modal>

    );
  }
}