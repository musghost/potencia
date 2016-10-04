import React, {Component} from 'react';
import ScrollReveal from 'scrollreveal';

export class Logos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: {
        from: 0,
        to: 530000
      },
      records: {
        from: 0,
        to: 145000
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

  componentDidMount() {
    window.sr = window.sr || ScrollReveal();
    const _this = this;

    sr.reveal('.books', {duration: 500, afterReveal: function() {
      _this.setState({loaded: true});
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

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    return (
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
    );
  }
}


Logos.propTypes = {
  loaded: React.PropTypes.bool
};