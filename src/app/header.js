import React, {Component} from 'react';
import {SendMessage} from './modals/send-message';
import {Login} from './modals/login';

export class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      modalIsOpen: false,
      modalLoginOpen: false
    };
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen(){
    this.setState({
      modalLoginOpen: !this.state.modalLoginOpen
    });
  }

  handleToggleMenu() {
    this.setState({
      opened: !this.state.opened
    });
  }

  handleClick(event) {
    if (typeof event !== 'undefined') {
      event.preventDefault();
    }
    this.setState({modalIsOpen: !this.state.modalIsOpen});
  }

  render() {
    return (
      <header>
        <div className="submenu">
          <div className="container">
            <ul>
              <li>
                <a href="https://potencia.mx/pagos" className="btn-payment">Realiza tu pago</a>
              </li>
              <li><a target="_blank" href="https://web.facebook.com/potenciaeducativa/"><i className="fa fa-facebook"></i></a></li>
              <li><a target="_blank" href="https://twitter.com/potenciaedu"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
              <li>
                <button type="button" onClick={this.handleOpen}>
                  LOGIN
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <nav className="clearfix">
            <span>
              <img src="assets/potencia.png" />
            </span>
            <div className="hamburguer" onClick={this.handleToggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className={this.state.opened?'is-active':''}>
              <li className="list-image">
                <a href="http://edilar.com/" target="_blank">
                  <img src="assets/images/logos/edilar.png" />
                </a>
              </li>
              <li className="list-image">
                <a href="http://redmagisterial.com/" target="_blank">
                  <img src="assets/images/logos/red-magisterial.png" />
                </a>
              </li>
              <li className="list-image list-image-g">
                <a href="https://www.google.com/edu/" target="_blank">
                  <img src="assets/images/logos/google-partner.png" />
                </a>
              </li>
              <li><a href="#" onClick={this.handleClick}>Contacto<br/>&nbsp;</a></li>
            </ul>
          </nav>
        </div>
        <SendMessage isOpen={this.state.modalIsOpen} handleClick={this.handleClick} />
        <Login isOpen={this.state.modalLoginOpen} handleClick={this.handleOpen} />
      </header>
    );
  }
}
