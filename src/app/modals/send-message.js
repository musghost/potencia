import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Modal, ModalBody, Button, ModalHeader, ModalFooter} from 'elemental';

export class SendMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formSent: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    
    const data = {
      PHONE: ReactDOM.findDOMNode(this.refs.name).value,
      EMAIL: ReactDOM.findDOMNode(this.refs.email).value,
      PHONE: ReactDOM.findDOMNode(this.refs.phone).value,
      SCHOOL: ReactDOM.findDOMNode(this.refs.school).value,
      MESSAGE: ReactDOM.findDOMNode(this.refs.message).value
    };

    /*$.ajax({
      type: 'GET',
      url: 'https://vincoorbis.us1.list-manage.com/subscribe/post-json?u=cd1cb16b3cd3cabeca99c9115&id=3b75087cad',
      data: data,
      cache: false,
      dataType: 'jsonp',
      jsonp: 'c',
      contentType: 'application/json; charset=utf-8',
      error: () => {
        console.log('error');
      },
      success: (data) => {
        if(data.result !== 'success') {
          console.log('something went wrong');
        } else {
          console.log('ok');
        }
      }
    });*/

    this.setState({formSent: true});
  }

  closeModal() {
    this.setState({formSent: false});
    this.props.handleClick()
  }

  render() {
    return (
      <Modal isOpen={this.props.isOpen} onCancel={this.props.handleClick} backdropClosesModal width={'small'}>
        <ModalHeader text="" showCloseButton onClose={this.props.handleClick} />
        <ModalBody>
          <form onSubmit={this.handleSubmit} className={this.state.formSent?'hidden':''}>
            <div className="message">
              <h2 className="title">Envía un mensaje</h2>
              <p>Déjanos conocerte y mostrarte qué es lo que <strong>Potencia</strong> puede hacer por ti.</p>
            </div>
            <div>
              <input type="text" ref="name" placeholder="Escribe tu nombre" />
            </div>
            <div>
              <input type="text" ref="email" placeholder="Escribe tu email" />
            </div>
            <div>
              <input type="text" ref="phone" placeholder="Escribe tu teléfono" />
            </div>
            <div>
              <input type="text" ref="school" placeholder="¿Cuál es tu colegio?" />
            </div>
            <div>
              <textarea ref="message" placeholder="Escribe tu mensaje"></textarea>
            </div>
            <ModalFooter>
              <button className="primary" type="submit">Enviar</button>
            </ModalFooter>
          </form>
          <div className={this.state.formSent?'':'hidden'}>
            <p>Gracias por enviar tus datos, nos comunicaremos contigo muy pronto.</p>
            <p>
              <button className="primary" type="button" onClick={this.closeModal}>Cerrar</button>
            </p>
          </div>
        </ModalBody>
      </Modal>
    );
  }
}

SendMessage.propTypes = {
  isOpen: React.PropTypes.bool,
  handleClick: React.PropTypes.func
};