import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Modal, ModalBody, Button, ModalHeader, ModalFooter} from 'elemental';
import {config} from '../config';

export class SendMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formSent: false,
      errors: {
        email: false,
        name: false,
        message: false
      },
      errorForm: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  validate(checkFor, field) {
    switch(checkFor) {
      case 'required':
        if(field === '') {
          return false;
        }
        break;
      case 'email':
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
        if (field === '' || !re.test(field)) {
          return false;
        }
        break;
    }
    return true;
  }

  handleSubmit(event) {
    event.preventDefault();
    
    const data = {
      name: ReactDOM.findDOMNode(this.refs.name).value,
      email: ReactDOM.findDOMNode(this.refs.email).value,
      phone: ReactDOM.findDOMNode(this.refs.phone).value,
      school: ReactDOM.findDOMNode(this.refs.school).value,
      message: ReactDOM.findDOMNode(this.refs.message).value
    };

    let errors = {
      email: false,
      name: false
    };

    this.setState({errors: errors});

    let prevent = false;

    if(!this.validate('required', data.name)) {
      errors.name = true;
      prevent = true;
    }

    if(!this.validate('required', data.message)) {
      errors.message = true;
      prevent = true;
    }

    if(!this.validate('email', data.email)) {
      errors.email = true;
      prevent = true;
    }

    if(prevent) {
      this.setState({
        errors: errors
      });

      return;
    }


    $.ajax({
      type: 'POST',
      url: config.comment.url,
      data: JSON.stringify(data),
      contentType: 'application/json',
      error: () => {
        this.setState({errorForm: true});
      },
      success: (data) => {
        this.setState({formSent: true});
      }
    });
  }

  closeModal() {
    this.setState({formSent: false});
    this.props.handleClick()
  }

  render() {
    let errorForm = null;

    if(this.state.errorForm) {
      errorForm = <div className="field-group show-errors"><span className="error-msg">Hubo un error al enviar el formulario.</span></div>
    }
    return (
      <Modal isOpen={this.props.isOpen} onCancel={this.props.handleClick} backdropClosesModal width={'small'}>
        <ModalHeader text="" showCloseButton onClose={this.props.handleClick} />
        <ModalBody>
          <form onSubmit={this.handleSubmit} className={this.state.formSent?'hidden':''}>
            <div className="message">
              <h2 className="title">Envía un mensaje</h2>
              <p>Déjanos conocerte y mostrarte qué es lo que <strong>Potencia</strong> puede hacer por ti.</p>
            </div>
            <div className={this.state.errors.name ? 'field-group show-errors':'field-group'}>
              <input type="text" ref="name" placeholder="Escribe tu nombre"  />
              <span className="error-msg">El nombre es requerido.</span>
            </div>
            <div className={this.state.errors.email ? 'field-group show-errors':'field-group'}>
              <input type="email" ref="email" placeholder="Escribe tu email"  />
              <span className="error-msg">El correo es requerido.</span>
            </div>
            <div className="field-group">
              <input type="tel" ref="phone" placeholder="Escribe tu teléfono" />
            </div>
            <div className="field-group">
              <input type="text" ref="school" placeholder="¿Cuál es tu colegio?" />
            </div>
            <div className={this.state.errors.message ? 'field-group show-errors':'field-group'}>
              <textarea ref="message" placeholder="Escribe tu mensaje" ></textarea>
              <span className="error-msg">El mensaje es requerido.</span>
            </div>
            {errorForm}
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