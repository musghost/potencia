import React, {Component} from 'react';
import  {Header} from './header';
import {PotenciaVideo} from './potenciaVideo';
import {Footer} from './footer';
import {SendMessage} from './modals/send-message';

export class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
  }

  render() {
    return(
      <div>
        <Header />
        <div className="potencia-video background">
          <div className="video-style">
            <iframe src="https://www.youtube.com/embed/ZwqiPM3Nygo?ecver=2" width="660" height="415" frameBorder="0" allowFullScreen></iframe>            
            <div className="text-center">
              <button className="btn btn-see">Ver video</button>
              <button className="btn btn-visit" onClick={() => this.setState({modalOpen: true})}>Agendar una visita</button>
            </div>
          </div>
          <div className="arrow">
            <span className="scroll-inside"></span>
          </div>
        </div>
        <SendMessage isOpen={this.state.modalOpen} handleClick={() => this.setState({modalOpen: false})} />
        <Footer />
      </div>
    );
  }
}