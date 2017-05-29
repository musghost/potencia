import React, {Component} from 'react';

export class Payments extends Component {
  render() {
    return (
      <div className="iframe-wrapper">
        <nav className="main-nav">
          <div className="nav-wrapper">
            <div>
              <div className="elements">
                <h1 className="logo"><img src="/assets/images/potencia-logo.png"/></h1>
              </div>
            </div>
            <div></div>
          </div>
        </nav>
        <iframe src="http://dev.edilar.com:8000/Portal_Pagos/" width="1140" height="900" frameBorder="0"/>
      </div>
    );
  }
}
