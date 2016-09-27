import React, {Component} from 'react';
import {Modal, ModalBody, Button, ModalHeader, ModalFooter} from 'elemental';

export class SendMessage extends Component {
  render() {
    return (
      <Modal isOpen={this.props.isOpen} onCancel={this.props.handleClick} backdropClosesModal width={'small'}>
        <ModalHeader text="" showCloseButton onClose={this.props.handleClick} />
        <ModalBody>
          <div className="message">
            <h2 className="title">Envía un mensaje</h2>
            <p>Conoce cómo puedes implementar Potencia en tu escuela.</p>
            <p>¡Escríbenos!</p>
          </div>
          <div>
            <input type="text" placeholder="Escribe tu nombre" />
          </div>
          <div>
            <input type="text" placeholder="Escribe tu email" />
          </div>
          <div>
            <input type="text" placeholder="Escribe tu teléfono" />
          </div>
          <div>
            <input type="text" placeholder="Escribe tu colegio" />
          </div>
          <div>
            <textarea placeholder="Escribe tu mensaje"></textarea>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="primary" type="primary" onClick={this.props.handleClick}>Enviar</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

SendMessage.propTypes = {
  isOpen: React.PropTypes.bool,
  handleClick: React.PropTypes.func
};