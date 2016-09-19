import React, {Component} from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <h3>Contacto</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
          <p>+52 (55) 3547 0082</p>
          <div>
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-google-plus"></i>
            </a>
          </div>
        </div>
        <div></div>
        <div>
          <h3>Envía un mensaje</h3>
          <input type="text" />
          <input type="email" />
        </div>
        <div>
        </div>
      </footer>
    );
  }
}
