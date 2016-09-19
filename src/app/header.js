import React, {Component} from 'react';

export class Header extends Component {
  render() {
    return (
      <header>
        <ul className="submenu">
          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
          <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
          <li><a href="#"><i className="fa fa-search"></i></a></li>
        </ul>
        <nav className="clearfix">
          <img src="assets/potencia.png" />
          <ul>
            <li><a href="#">Quienes<br/>somos</a></li>
            <li><a href="#">Propuesta<br/>pedagógica</a></li>
            <li><a href="#">Plataforma<br/>tecnológica</a></li>
            <li><a href="#">Desarrollo<br/>profesional</a></li>
            <li><a href="#">Contacto<br/>&nbsp;</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}
