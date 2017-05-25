import React, {Component} from 'react';
import {Link} from 'react-router';
import {Title} from './title';
import {Development} from './development';
import {Logos} from './logos';
import ScrollReveal from 'scrollreveal';
import {SendMessage} from './modals/send-message';

const videos = ['output', 'output-2'];

export class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      modalIsOpen: false,
      index: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleOnEnded = this.handleOnEnded.bind(this);
  }

  handleClick(event) {
    if(typeof event !== 'undefined') {
      event.preventDefault();
    }
    this.setState({modalIsOpen: !this.state.modalIsOpen});
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  componentDidMount() {
    window.sr = window.sr || ScrollReveal();

    sr.reveal('.potencia-image', {duration: 1000});
    sr.reveal('.component-img', {duration: 1000});
    sr.reveal('.props-img', {duration: 2000, rotate: { y: 50 }});
    sr.reveal('.players-img', {duration: 2000, rotate: { z: 100 }});
    let video = document.getElementById('video');
    const videoMp4 = `assets/video/${videos[this.state.index]}.mp4`;
    video.src = videoMp4;
    video.play();
  }

  componentWillMount() {
    this.setState({index: this.getRandomInt(0, 2)});
  }

  handleOnEnded() {
    let video = document.getElementById('video');

    let next;
    if(this.state.index + 1 >= videos.length) {
      next = 0;
    } else {
      next = this.state.index + 1;
    }
    this.setState({index: next});
    const videoMp4 = `assets/video/${videos[next]}.mp4`;
    video.src = videoMp4;
    video.play();
  }

  render() {
    return (
      <div>
        <div className="background">
          <div className="arrow">
            <span className="scroll-inside"></span>
          </div>
          <div className="potencia">
            <div className="prueba">
              <img src="assets/potencia.png" className="potencia-image" />
            </div>
            <Link to="/video" className="btn-know">Conoce nuestra plataforma</Link>
          </div>
          <video id="video" className="video" onPause={this.handleOnEnded}>
          </video>
        </div>
        <div className="container">
          <div className="get-info clearfix">
            <div>
              <img src="assets/images/info.jpg" />
            </div>
            <div className="info-heading">
              <h2>Una solución educativa</h2>
              <div className="info-action">
                <p>para atender y resolver las necesidades<br />de los colegios</p>
                <a href="#" onClick={this.handleClick}>Solicita más información</a>
              </div>
            </div>
          </div>
        </div>
        <div className="solutions clearfix">
          <div className="container">
            <h1>Una solución educativa integral con tres componentes,<br />para atender las necesidades de los colegios de educación básica</h1>
            <div className="components">
              <div className="component">
                <img src="assets/images/component1.jpg" className="component-img" />
                <div>
                  <p>Propuesta pedagógica</p>
                </div>
              </div>
              <div className="component">
                <img src="assets/images/component2.jpg" className="component-img" />
                <div>
                  <p>Plataforma tecnológica</p>
                </div>
              </div>
              <div className="component">
                <img src="assets/images/component3.jpg" className="component-img" />
                <div>
                  <p>Desarrollo profesional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tecnology">
          <h1>Actores en Potencia</h1>
          <p>El ecosistema de Potencia conecta a los actores de la comunidad educativa<br/>con los medios tecnológicos para una interacción efectiva.</p>
          <div className="container">
            <div className="players">
              <div className="player">
                <div><img src="assets/images/item4.png" className="players-img" /></div>
                <div>
                  <h2>Estudiante</h2>
                  <p>Le ofrecemos la mejor experiencia de trabajo por medio de fichas o Experiencias de aprendizaje impresas, vinculadas a nuestra plataforma digital, especialmente diseñada para potenciar su experiencia de aprendizaje en el aula y fuera de ella.</p>
                </div>
              </div>
              <div className="player">
                <div><img src="assets/images/item1.png" className="players-img" /></div>
                <div>
                  <h2>Docente</h2>
                  <p>Lo empoderamos para que use la tecnología de forma estratégica con el fin de favorecer su experiencia de enseñanza-aprendizaje, con herramientas, contenido, metodología, alianzas clave y equipamiento.</p>
                </div>
              </div>
            </div>
            <div className="players">
              <div className="player">
                <div><img src="assets/images/item2.png" className="players-img" /></div>
                <div>
                  <h2>Familia</h2>
                  <p>Le comunicamos el desempeño de los estudiantes mediante nuestro sistema digital (app), lo que hace posible que la información fluya oportunamente entre el colegio, el estudiante y la familia.</p>
                </div>
              </div>
              <div className="player">
                <div><img src="assets/images/item5.png" className="players-img" /></div>
                <div>
                  <h2>Ambiente de apoyo: Aula</h2>
                  <p>La equipamos con hardware para potenciar el ambiente de aprendizaje y el desempeño de docentes y estudiantes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="proposals">
          <h1>Propuesta pedagógica</h1>
          <p>Potencia educativa redefine el pensamiento de diseño, <i>Design Thinking</i>, mediante procesos<br />de observación y empatía, de comunicación, colaboración y creación, y engloba conocimientos y habilidades de manera natural y efectiva.</p>
          <div className="container">
            <div className="proposals-list">
              <div className="proposal">
                <div><img src="assets/images/proposal1.png" className="props-img" /></div>
                <div className="description">
                  <h2>Programa SEP</h2>
                  <p>Atendemos el currículo oficial de primaria y secundaria.</p>
                </div>
              </div>
              <div className="proposal">
                <div><img src="assets/images/proposal2.png" className="props-img" /></div>
                <div className="description">
                  <h2>Habilidades del siglo XXI<sub>21st Century Skills</sub></h2>
                  <p>Potenciamos el pensamiento crítico, el manejo de medios digitales y la creatividad para enfrentar los retos de su tiempo.</p>
                </div>
              </div>
              <div className="proposal">
                <div><img src="assets/images/proposal3.png" className="props-img" /></div>
                <div className="description">
                  <h2>Pensamiento de diseño<sub>Design Thinking</sub></h2>
                  <p>Proponemos una técnica de trabajo en el aula, y fuera de ella, que abre posibilidades de innovación en el aprendizaje.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Development />
        <Logos />
        <div className="about">
          <div className="container">
            <div className="about-wrapper">
              <div className="about-info">
                <h1>Acerca de nosotros</h1>
                <p><span className="p-bold">Somos</span> un equipo de trabajo interdisciplinario que, un día, imaginó que era posible innovar en la educación. Hacerlo es nuestra tarea y el resultado es <span className="p-bold">Potencia educativa</span>, cuya finalidad es que cada uno de los actores involucrados en el proceso formativo de los estudiantes encuentren una verdadera solución global, con base tecnológica, para potenciar sus habilidades y puedan enfrentar su presente y su futuro con las mejores herramientas a su alcance. </p>
                <p><span className="p-bold">Somos</span> un equipo de entusiastas que creemos en el conocimiento, en las capacidades personales de los estudiantes y en que cada uno puede conocerse a sí mismo, dar solución a desafíos y pensar por sí mismo.</p>
                <p><span className="p-bold">Somos</span> un equipo que construye hoy y forja un futuro.</p>
              </div>
              <div className="image">
                <a href="http://edilar.com" target="_target">
                  <img src="assets/images/about.jpg" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <SendMessage isOpen={this.state.modalIsOpen} handleClick={this.handleClick} />
      </div>
    );
  }
}
