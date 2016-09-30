import React, {Component} from 'react';

const tabs = [
  {
    name: 'Certificaciones',
    content: (
      <div>
        <p>Establecimos alianzas estratégicas para ofrecer a profesionales de la educación oportunidades de desarrollo profesional a través de procesos de formación, evaluación y certificación que están acreditados a nivel nacional por el CONOCER, y tienen reconocimiento internacional por Club UNESCO y Google Educación</p>
        <img src="assets/images/items.png" />
      </div>
    ),
  },
  {
    name: 'Programa de acompañamiento',
    content: (
      <div>
        <p>Sabemos que las mejores prácticas en el uso de tecnología para el aprendizaje, valoran y respetan los saberes de cada maestro sin imponer otros, tienen claridad en el propósito didáctico de los recursos, integran estratégicamente tecnología añadiendo  innovación pedagógica a las prácticas preexistentes.</p>
        <p>Es por eso que nuestro Programa de Acompañamiento se realiza con didactas especialistas por área en el uso de tecnología, mediante varias etapas, en formato híbrido.</p>
        <div><img src="assets/images/esquema.png" /></div>
      </div>
    )
  },
  {
    name: 'Evaluación',
    content: (
      <div>
        <p>En Potencia hemos creado instrumentos para evaluar diferentes aspectos de interés para las instituciones educativas, contenidos en nuestra propuesta pedagógica:
        </p>
        <div><img src="assets/images/esquema-2.png" /></div>
      </div>
    )
  },
  {
    name: 'Red Potencia',
    content: (
      <div className="network">
        <div>
          <img src="assets/images/red.png" />
        </div>
        <div className="network-info">
          <p>La Red Potencia impulsa el análisis de experiencias de aprendizaje exitosas centradas en los alumnos y propicia el trabajo colaborativo entre docentes para enriquecer su formación permanente mediante una comunidad en red..</p>
          <p>Compartir y explorar entre colegas en un marco de equidad y respeto, puede orientar las acciones educativas hacia la innovación pedagógica empleando las Habilidades del siglo XXI, el pensamiento de diseño y el aprendizaje a profundidad.</p>
        </div>
      </div>
    )
  },
];

export class Development extends Component {

  constructor(props) {
    super(props);

    this.state = {
      index: 0
    };
    this.handleTab = this.handleTab.bind(this)
  }

  handleTab(index, other) {
    other.preventDefault();
    this.setState({
      index: index
    });
  }
  
  render() {
    const tabLinks = tabs.map((tab, index) => {
      let className = '';
      if(index === this.state.index) {
        className = 'active'
      }
      return <a onClick={this.handleTab.bind(this, index)} href="#" className={className} key={index}>{tab.name}</a>;
    });

    return (
      <div className="development">
        <div className="development-header">
          <h1>Desarrollo profesional</h1>
          <div className="container">
            <div className="tabs">{tabLinks}</div>
          </div>
        </div>
        <div className="tabs-body">
          <div className="container">
            {tabs[this.state.index].content}
          </div>
        </div>
      </div>
    );
  }
}