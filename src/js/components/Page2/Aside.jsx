import React from 'react';
import PropTypes from 'prop-types';
import correctProgram from '../../additions/correctProgram';

const Aside = (props) => {
  // console.log(props.data);
  return (
    <aside className="aside asidePage2-3">
      <section>
        <h2>Выбранная программа</h2>
        <h3>Новая программа по {correctProgram(props.program)}</h3>
      </section>
      <section>
        <h2>Параметры</h2>
        <h3>Сумма займа - {props.data.summ} р.</h3>
        <h3>Срок займа - {props.data.term} мес.</h3>
      </section>
      <section>
        <h2>Выбранная стратегия</h2>
        <h3>Первоначальный взнос -
          <span className="strategy">{props.firstInstallment}</span> руб.
        </h3>
        <h3>Ежемесячный взнос -
          <span className="strategy">{props.monthlyInstallment}</span> руб.
        </h3>
      </section>
    </aside>
  );
};

Aside.propTypes = {
  data: PropTypes.shape({
    summ: PropTypes.string,
    term: PropTypes.string,
  }).isRequired,
  program: PropTypes.string.isRequired,
  firstInstallment: PropTypes.string.isRequired,
  monthlyInstallment: PropTypes.string.isRequired,
};

export default Aside;
