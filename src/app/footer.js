import React, {Component} from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="footer-wrapper">
            <div>
              <h3>Contacto</h3>
              <p>En Potencia queremos saber más de tus necesidades educativas y también nosotros poder presentarte nuestros programas.</p>
              <p>Por favor ponte en contacto con nosotros para que podamos agendar una vista.</p>
              <p>+52 (55) 3547 0082</p>
            </div>
            <div></div>
            <div>
              <h3>Estamos a tus órdenes</h3>
              <div className="form">
                <input type="text" placeholder="Escribe tu nombre*" />
                <input type="email" placeholder="Escribe tu email*" />
                <button type="button">Enviar</button>
              </div>
            </div>
            <div className="textarea">
              <textarea placeholder="Escribe tu mensaje"></textarea>
            </div>
          </div>
          <div className="social">
            <a href="#" className="facebook">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" className="twitter">
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
