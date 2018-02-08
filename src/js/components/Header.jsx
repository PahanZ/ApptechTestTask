import React from 'react';
import data from '../additions/data';

const img1 = require('../../img/1.png');
const img2 = require('../../img/2.png');
const img3 = require('../../img/3.png');

export default (props) => {
  console.log(props);
  return (
  <header>
    <ul className="menu">
      <li className="item active">
        <div>
          <div className="tittle">{data.program.tittle}</div>
          <div className="subtittle">{data.program.subtittle}</div>
        </div>
        <img className="imgHeader" src={img1} alt="1" />
      </li>
      <li className="item">
        <div>
          <div className="tittle">{data.strategy.tittle}</div>
          <div className="subtittle">{data.strategy.subtittle}</div>
        </div>
        <img className="imgHeader" src={img2} alt="1" />
      </li>
      <li className="item">
        <div>
          <div className="tittle">{data.total.tittle}</div>
          <div className="subtittle">{data.total.subtittle}</div>
        </div>
        <img className="imgHeader" src={img3} alt="1" />
      </li>
    </ul>
  </header>
)};

