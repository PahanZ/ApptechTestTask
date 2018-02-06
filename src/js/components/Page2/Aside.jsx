import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  console.log(props);
  const correctProgram = () => {
    if (props.program === 'Недвижимость') {
      return `${props.program.slice(0, props.program.length - 1)}и`;
    }
  };
  return (
    <aside className="aside asidePage2">
      <div>
        <h2>Выбранная программа</h2>
        <h3>Новая программа по {correctProgram()}</h3>
      </div>
      <div>
        <h2>Параметры</h2>
        <h3>Сумма займа - {props.data.summ}р.</h3>
        <h3>Сумма займа - {props.data.term}мес.</h3>
      </div>
      <div>
        <h2>Выбранная стратегия</h2>
        <h3>Первоначальный взнос - руб.</h3>
        <h3>Ежемесячный взнос - руб.</h3>
      </div>
    </aside>
  );
};

