import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  // console.log(props);
  return (
    <div className="content">
      <input
        type="range"
        min="10"
        max={props.data.summ}
        step={10}
        onChange={(event) => {
          props.setFirstInstallment(event.currentTarget.value);
    }}
      />
      <input
        type="range"
        min="10"
        max={props.data.summ}
        step={10}
        onChange={(event) => {
          props.setMonthlyInstallment(event.currentTarget.value);
      }}
      />
      <Link to="/" className="options optionsBtn"> Перерасчет </Link>
      <Link
        to="/Page3"
        className="options optionsBtn"
        onClick={() => {
          const strategyParams = document.getElementsByClassName('strategy');
          props.choiceStrategy(strategyParams[0].textContent, strategyParams[1].textContent);
      }}
      > Раcчитать
      </Link>
    </div>
  );
};
