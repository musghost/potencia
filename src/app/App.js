import React, {Component, PropTypes} from 'react';
import {Header} from './header';
import {Footer} from './footer';

export class App extends Component {
  render() {
    console.log('hey you');
    return (
      <div>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
};
