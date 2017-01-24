import React, {Component} from 'react';
import  {HeaderVideo} from './headerVideo';
import {PotenciaVideo} from './potenciaVideo';
import {Footer} from './footer';

export class Video extends Component {
  render() {
    return(
      <div>
        <HeaderVideo />
        <div className="potencia-video background">
          <div className="video-style">
            <iframe width="660" height="415" src="https://www.youtube.com/embed/s1QQUbVipfo" frameborder="0" allowfullscreen></iframe>
          </div>
          <div className="arrow">
            <span className="scroll-inside"></span>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}