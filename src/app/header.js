import React, {Component} from 'react';
import {SendMessage} from './modals/send-message';

export class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      modalIsOpen: false
    };
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleToggleMenu() {
    this.setState({
      opened: !this.state.opened
    });
  }

  handleClick(event) {
    if(typeof event !== 'undefined') {
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
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
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
                <a href="#">
                  <img src="assets/images/logos/red-magisterial.png" />
                </a>
              </li>
              <li className="list-image">
                <a href="#">
                  <img src="assets/images/logos/google-partner.png" />
                </a>
              </li>
              <li><a href="#" onClick={this.handleClick}>Contacto<br/>&nbsp;</a></li>
            </ul>
          </nav>
        </div>
        <SendMessage isOpen={this.state.modalIsOpen} handleClick={this.handleClick} />
      </header>
    );
  }
}
