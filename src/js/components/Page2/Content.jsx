import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  console.log(props.data);
  return (
  <div className="content">
    <input type="range" min="10" max={props.data.summ} />
    <input type="range" min="10" max={props.data.summ} />
    <Link to="/" className="options optionsBtn"> Перерасчет </Link>
    <Link to="/Page3" className="options optionsBtn"> Раcчитать </Link>
  </div>
)};
