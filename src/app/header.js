import React, {Component} from 'react';

export class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
  }

  handleToggleMenu() {
    this.setState({
      opened: !this.state.opened
    });
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
              <li><a href="#">Contacto<br/>&nbsp;</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
