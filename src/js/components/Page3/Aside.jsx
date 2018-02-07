import React from 'react';
import correctProgram from '../../additions/correctProgram';
import data from '../../additions/dataForAside3';

export default (props) => {
  // console.log(props);
  const section = data.h3.map((element, i) => (
    <section key={String(i)}>
      <h3>{element}</h3>
      <h4>{data.h4}</h4>
    </section>
  ));
  return (
    <aside className="aside asidePage2-3">
      <section>
        <h2>Выбранная программа</h2>
        <h3>Новая программа по {correctProgram(props.program)}</h3>
      </section>
      <section>
        <h2>Параметры</h2>
        <h3>Сумма займа - {props.data.summ} р.</h3>
        <h3>Сумма займа - {props.data.term} мес.</h3>
      </section>
      <section>
        <h2>Выбранная стратегия</h2>
        <h3>Первоначальный взнос -
          <span className="strategy"> {props.data.firstInstallment} </span>
           руб.
        </h3>
        <h3>Ежемесячный взнос -
          <span className="strategy"> {props.data.monthlyInstallment} </span>
           руб.
        </h3>
      </section>
      <section>
        <h2>Расходы заемщика</h2>
        {section}
      </section>
    </aside>
  );
};

