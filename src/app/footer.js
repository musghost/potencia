import {config} from './config';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: true,
      errorForm: false
    };

    this.handleSend = this.handleSend.bind(this);
  }

  handleSend(e) {
    e.preventDefault();

    const data = {
      name: ReactDOM.findDOMNode(this.refs.name).value,
      email: ReactDOM.findDOMNode(this.refs.email).value,
      message: ReactDOM.findDOMNode(this.refs.message).value
    };

    $.ajax({
      type: 'POST',
      url: config.comment.url,
      data: JSON.stringify(data),
      contentType: 'application/json',
      error: () => {
        this.setState({errorForm: true});
      },
      success: (data) => {
        this.setState({showForm: false});
      }
    });
  }

  render() {
    return (
      <footer>
        <div className="container">
          <div className="footer-wrapper">
            <div>
              <h3>Contacto</h3>
              <p>En Potencia queremos saber más de tus necesidades educativas y también nosotros poder presentarte nuestros programas.</p>
              <p>Por favor ponte en contacto con nosotros para que podamos agendar una visita.</p>
              <p>+52 (55) 3547 0082</p>
            </div>
            <div></div>
            <div className="form-alone">
              <h3>Estamos a tus órdenes</h3>
              <form onSubmit={this.handleSend} className={this.state.showForm?'':'hidden'}>
                <div className="form">
                  <input type="text" ref="name" placeholder="Escribe tu nombre*" required />
                  <input type="email" ref="email" placeholder="Escribe tu email*" required />
                  <button type="submit">Enviar</button>
                </div>
                <div className="textarea">
                  <textarea ref="message" placeholder="Escribe tu mensaje" required></textarea>
                </div>
              </form>
              <div className={this.state.showForm?'hidden':''}>
                <p>Gracias por enviar tus datos, nos comunicaremos contigo muy pronto.</p>
              </div>
              <div className={this.state.errorForm?'':'hidden'}>
                <p>Hubo un error al tratar de enviar tus datos.</p>
              </div>
            </div>
          </div>
          <div className="social">
            <a href="https://web.facebook.com/potenciaeducativa/" target="_blank" className="facebook">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://twitter.com/potenciaedu" target="_blank" className="twitter">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#" className="google">
              <i className="fa fa-google-plus"></i>
            </a>
          </div>
          <div className="footer-tail">
            <p>Potencia 2016, ver <a href="#">Política de privacidad</a></p>
          </div>
        </div>
      </footer>
    );
  }
}
