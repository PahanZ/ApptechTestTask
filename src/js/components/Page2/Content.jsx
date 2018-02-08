import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Content = (props) => {
  // console.log(props);
  return (
    <div className="content">
      <section className="page2content">
        <div className="circle" />
        <div className="circle" />
      </section>
      <section className="page2content">
        <div>
          <h3>Первоначальный взнос</h3>
          <span>{props.firstInstallment}</span>
        </div>
        <div>
          <h3>Ежемесячный взнос</h3>
          <span>{props.monthlyInstallment}</span>
        </div>
      </section>
      <section className="page2content">
        <div>
          <div>Сумма: <p>{props.firstInstallment}</p></div>
          <input
            className="inputRange blueRange"
            type="range"
            min="10"
            max={props.data.summ}
            step={10}
            onChange={(event) => {
              props.setFirstInstallment(event.currentTarget.value);
            }}
          />
        </div>
        <div>
          <div>Сумма: <p>{props.monthlyInstallment}</p></div>
          <input
            className="inputRange orangeRange"
            type="range"
            min="10"
            max={props.data.summ}
            step={10}
            onChange={(event) => {
              props.setMonthlyInstallment(event.currentTarget.value);
            }}
          />
        </div>
      </section>
      <section>
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
      </section>
    </div>
  );
};

Content.propTypes = {
  data: PropTypes.shape({
    summ: PropTypes.string,
  }).isRequired,
  firstInstallment: PropTypes.string.isRequired,
  monthlyInstallment: PropTypes.string.isRequired,
  setFirstInstallment: PropTypes.func.isRequired,
  setMonthlyInstallment: PropTypes.func.isRequired,
  choiceStrategy: PropTypes.func.isRequired,
};

export default Content;
