import React from 'react';
import data from '../../additions/data';

export default () => (
  <header>
    <ul className="menu">
      <li className="item active">
        <div>
          <div className="tittle">{data.program.tittle}</div>
          <div className="subtittle">{data.program.subtittle}</div>
        </div>
        <img className="imgHeader" src={require('../../../img/1.png')} alt="1" />
      </li>
      <li className="item">
        <div>
          <div className="tittle">{data.strategy.tittle}</div>
          <div className="subtittle">{data.strategy.subtittle}</div>
        </div>
        <img className="imgHeader" src={require('../../../img/2.png')} alt="1" />
      </li>
      <li className="item">
        <div>
          <div className="tittle">{data.total.tittle}</div>
          <div className="subtittle">{data.total.subtittle}</div>
        </div>
        <img className="imgHeader" src={require('../../../img/3.png')} alt="1" />
      </li>
    </ul>
  </header>
);

