import React from 'react';
import PropTypes from 'prop-types';
import data from '../additions/data';

const img1 = require('../../img/1.png');
const img2 = require('../../img/2.png');
const img3 = require('../../img/3.png');

export default class Header extends React.Component {
  componentDidMount() {
    this.checkPage();
  }
  componentDidUpdate() {
    this.checkPage();
  }
  checkPage() {
    const heads = document.getElementsByClassName('item');
    Array.prototype.forEach.call(heads, (element) => {
      element.classList.remove('active');
      if (element.getAttribute('data-atr') === this.props.currentPage) {
        element.classList.add('active');
      }
    });
  }
  render() {
    return (
      <header>
        <ul className="menu">
          <li className="item" data-atr="/">
            <div>
              <div className="tittle">{data.program.tittle}</div>
              <div className="subtittle">{data.program.subtittle}</div>
            </div>
            <img className="imgHeader" src={img1} alt="1" />
          </li>
          <li className="item" data-atr="/Page2">
            <div>
              <div className="tittle">{data.strategy.tittle}</div>
              <div className="subtittle">{data.strategy.subtittle}</div>
            </div>
            <img className="imgHeader" src={img2} alt="1" />
          </li>
          <li className="item" data-atr="/Page3">
            <div>
              <div className="tittle">{data.total.tittle}</div>
              <div className="subtittle">{data.total.subtittle}</div>
            </div>
            <img className="imgHeader" src={img3} alt="1" />
          </li>
        </ul>
      </header>
    );
  }
}

Header.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

