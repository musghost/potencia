import React, {Component} from 'react';
import  {Header} from './header';
import {PotenciaVideo} from './potenciaVideo';
import {Footer} from './footer';

export class Video extends Component {
  render() {
    return(
      <div>
        <Header />
        <div className="potencia-video background">
          <div className="video-style">
            <iframe width="660" height="415" src="https://www.youtube.com/embed/s1QQUbVipfo" frameBorder="0" allowFullScreen></iframe>
            <div className="text-center">
              <button className="btn btn-see">Ver video</button>
              <button className="btn btn-visit">Agendar una visita</button>
            </div>
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