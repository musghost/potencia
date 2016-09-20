import React, {Component} from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="footer-wrapper">
            <div>
              <h3>Contacto</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
              <p>+52 (55) 3547 0082</p>
            </div>
            <div></div>
            <div>
              <h3>Envía un mensaje</h3>
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
