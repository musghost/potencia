import React, {Component} from 'react';
import {Header} from './header';
import {Title} from './title';
import {Techs} from './techs/techs';
import {Footer} from './footer';

export class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="background">
          <div className="potencia">
            <img src="assets/potencia.png" />
          </div>
          <video autoPlay loop className="video">
            <source src="http://ak9.picdn.net/shutterstock/videos/4944299/preview/stock-footage-superhero-boy-runs-around-park-pretending-to-fly.mp4" type='video/mp4' / >
            <source src="http://ak9.picdn.net/shutterstock/videos/4944299/preview/stock-footage-superhero-boy-runs-around-park-pretending-to-fly.webm" type='video/webm' />
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
                <a href="#">Solicita más información</a>
              </div>
            </div>
          </div>
        </div>
        <div className="solutions clearfix">
          <div className="container">
            <h1>Potencia es una solución educativa<br />con 3 componentes</h1>
            <div className="components">
              <div className="component">
                <img src="assets/images/component1.jpg" />
                <div>
                  <p>Propuesta pedagógica</p>
                </div>
              </div>
              <div className="component">
                <img src="assets/images/component2.jpg" />
                <div>
                  <p>Plataforma tecnológica</p>
                </div>
              </div>
              <div className="component">
                <img src="assets/images/component3.jpg" />
                <div>
                  <p>Desarrollo profesional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tecnology">
          <h1>Actores en la tecnología</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt<br />ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          <div className="container">
            <div className="players">
              <div className="player">
                <div><img src="assets/images/item1.png" /></div>
                <div>
                  <h2>Maestro</h2>
                  <p>En Potencia, empoderamos al docente con herramientas de contenido, metodología, alianzas clave y equipamiento para el uso estratégico de la tecnología para crear experiencias de aprendizaje.</p>
                </div>
              </div>
              <div className="player">
                <div><img src="assets/images/item2.png" /></div>
                <div>
                  <h2>Padres</h2>
                  <p>Hoy las tecnologías de la información (app para padres) hacen posible que la comunicación fluya adecuadamente entre las escuelas y las familias de los estudiantes.</p>
                </div>
              </div>
            </div>
            <div className="players">
              <div className="player">
                <div><img src="assets/images/item3.png" /></div>
                <div>
                  <h2>Aula</h2>
                  <p>Entendemos los retos que implica utilizar tecnología de forma eficaz dentro del aula, Potencia proveerá de el hardware y las aplicaciones para que podamos hacer con estas.</p>
                </div>
              </div>
              <div className="player">
                <div><img src="assets/images/item4.png" /></div>
                <div>
                  <h2>Alumnos</h2>
                  <p>Nuestros alumnos tendrán acceso en casa a una plataforma especialmente diseñada para Potencializar la experiencia de enseñanza - aprendizaje que les permita colaborar y.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="proposals">
          <h1>Propuesta pedagógica</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt<br />ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          <div className="container">
            <div className="proposals-list">
              <div className="proposal">
                <div><img src="assets/images/proposal1.png" /></div>
                <div className="description">
                  <h2>Programa SEP</h2>
                  <p>Potencia atiende las necesidades educativas del país, por eso integramos el</p>
                </div>
              </div>
              <div className="proposal">
                <div><img src="assets/images/proposal2.png" /></div>
                <div className="description">
                  <h2>21ts Century Skills</h2>
                  <p>El futuro nos presenta nuevas oportunidades que la niñez del mundo</p>
                </div>
              </div>
              <div className="proposal">
                <div><img src="assets/images/proposal3.png" /></div>
                <div className="description">
                  <h2>Design Thinking</h2>
                  <p>Nuestra propuesta reelabora el pensamiento de diseño mediante procesos de</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="development">
          <div className="development-header">
            <h1>Desarrollo profesional</h1>
            <div className="container">
              <div className="tabs">
                <a href="#" className="active">Certificaciones</a>
                <a href="#">Programa de acompañamiento</a>
                <a href="#">Evaluación</a>
                <a href="#">Título 4</a>
              </div>
            </div>
          </div>
          <div className="tabs-body">
            <div className="container">
              <p>Establecimos alianzas estratégicas para ofrecer a profesionales de la educación oportunidades de desarrollo profesional a través de procesos de formación, evaluación y certificación que están acreditados a nivel nacional por el CONOCER, y tienen reconocimiento internacional por Club UNESCO y Google Educación.</p>
              <img src="assets/images/items.png" />
            </div>
          </div>
        </div>
        <div className="logos">
          <h1>
            <img src="assets/images/logos/edilar.png" />
          </h1>
          <p>Algunas estadísticas acerca de Edilar</p>
          <div className="container">
            <div className="statistics">
              <div className="statistic">
                <img src="assets/images/logos/logo1.png" />
                <div className="spec">
                  <h1>+530,000</h1>
                  <p>Libros entregados</p>
                </div>
              </div>
              <div className="statistic">
                <img src="assets/images/logos/logo2.png" />
                <div className="spec">
                  <h1>+115,000</h1>
                  <p>Registros en Red Magisterial</p>
                </div>
              </div>
              <div className="statistic">
                <img src="assets/images/logos/logo3.png" />
                <div className="spec">
                  <h1>+17,000</h1>
                  <p>Materiales Educativos Digitales</p>
                </div>
              </div>
              <div className="statistic">
                <img src="assets/images/logos/logo4.png" />
                <div className="spec">
                  <h1>+1,500</h1>
                  <p>Libros donados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="container">
            <div className="about-wrapper">
              <div className="about-info">
                <h1>Acerca de nosotros</h1>
                <p>Somos un consorcio editorial con 24 años de experiencia en el mercado educativo en México.</p>
                <p>Somos un equipo de profesionales en el desarrollo de materiales educativos y en la construcción de plataformas tecnológicas para el aprendizaje y la formación docente.</p>
                <p>Y tenemos una gran experiencia en la creación de libros de texto gratuito para la educación básica.</p>
                <a href="#">
                  Leer más
                  <i className="fa fa-long-arrow-right"></i>
                </a>
              </div>
              <div className="image">
                <img src="assets/images/about.jpg" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
