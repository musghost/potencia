import React, {Component} from 'react';

export class Payments extends Component {
  render() {
    return (
      <div className="iframe-container">
        <iframe src="http://dev.edilar.com:8000/Portal_Pagos/" width="1140" height="900" frameBorder="0"/>
      </div>
    );
  }
}
