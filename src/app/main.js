import React, {Component} from 'react';
import {Header} from './header';
import {Title} from './title';
import {Development} from './development';
import {Footer} from './footer';
import ScrollReveal from 'scrollreveal';

export class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: {
        from: 0,
        to: 530000
      },
      records: {
        from: 0,
        to: 115000
      },
      materials: {
        from: 0,
        to: 17000
      },
      donate: {
        from: 0,
        to: 1500
      }
    };

    this.numberWithCommas = this.numberWithCommas.bind(this);
    this.reduceNumber = this.reduceNumber.bind(this);
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  reduceNumber(current, obj, x) {

    setTimeout(() => {
      const objRes = {};
      let from = obj.from + x;

      if(from >= obj.to) {
        from = obj.to;
      }

      objRes[current] = {
        to: obj.to,
        from: from
      };

      this.setState(objRes);

      if(from < obj.to){
        this.reduceNumber(current, objRes[current], x);
      }
    }, 1);
  }

  componentDidMount() {
    window.sr = ScrollReveal();

    sr.reveal('.potencia-image', {duration: 1000});
    sr.reveal('.component-img', {duration: 1000});
    sr.reveal('.props-img', {duration: 2000, rotate: { y: 50 }});
    sr.reveal('.players-img', {duration: 2000, rotate: { z: 100 }});

    const _this = this;

    sr.reveal('.books', {duration: 500, afterReveal: function() {
      _this.reduceNumber('books', _this.state.books, 4416);
    }});
    sr.reveal('.records', {duration: 500, afterReveal: function() {
      _this.reduceNumber('records', _this.state.records, 451);
    }});
    sr.reveal('.materials', {duration: 500, afterReveal: function() {
      _this.reduceNumber('materials', _this.state.materials, 42);
    }});
    sr.reveal('.donate', {duration: 500, afterReveal: function() {
      _this.reduceNumber('donate', _this.state.donate, 20);
    }});
  }

  render() {
    return (
      <div>
        <Header />
        <div className="background">
          <div className="potencia">
            <img src="assets/potencia.png" className="potencia-image" />
          </div>
          <video autoPlay loop className="video">
            <source src="assets/video/output.mp4" type='video/mp4' / >
            <source src="assets/video/output.webm" type='video/webm' />
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
            <h1>Una solución educativa global con tres componentes,<br />para atender las necesidades de los colegios de educación básica</h1>
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
          <p>En Potencia entendemos a todos los actores de la comunidad educativa y hoy la tecnología<br />nos permite usar herramientas para cada uno de ellos que potencialice su experiencia y el resultado en el aprendizaje de los niños. </p>
          <div className="container">
            <div className="players">
              <div className="player">
                <div><img src="assets/images/item4.png" className="players-img" /></div>
                <div>
                  <h2>Estudiante</h2>
                  <p>Le ofrecemos la mejor experiencia de trabajo por medio de carpetas vinculadas a nuestra plataforma digital, especialmente diseñada para potenciar su experiencia de aprendizaje en el aula y fuera de ella.</p>
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
                <div><img src="assets/images/item3.png" className="players-img" /></div>
                <div>
                  <h2>Aula</h2>
                  <p>La equipamos con hardware para potenciar el ambiente de aprendizaje y el desempeño de docentes y estudiantes.</p>
                </div>
              </div>
              <div className="player">
                <div><img src="assets/images/item2.png" className="players-img" /></div>
                <div>
                  <h2>Familia</h2>
                  <p>Le comunicamos el desempeño de los estudiantes mediante nuestro sistema digital (app), lo que hace posible que la información fluya oportunamente entre el colegio, el estudiante y la familia.</p>
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
                  <h1 className="books">{this.numberWithCommas(this.state.books.from)}</h1>
                  <p>Libros entregados</p>
                </div>
              </div>
              <div className="statistic">
                <img src="assets/images/logos/logo2.png" />
                <div className="spec">
                  <h1 className="records">{this.numberWithCommas(this.state.records.from)}</h1>
                  <p>Registros en Red Magisterial</p>
                </div>
              </div>
              <div className="statistic">
                <img src="assets/images/logos/logo3.png" />
                <div className="spec">
                  <h1 className="materials">{this.numberWithCommas(this.state.materials.from)}</h1>
                  <p>Materiales Educativos Digitales</p>
                </div>
              </div>
              <div className="statistic">
                <img src="assets/images/logos/logo4.png" />
                <div className="spec">
                  <h1 className="donate">{this.numberWithCommas(this.state.donate.from)}</h1>
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
