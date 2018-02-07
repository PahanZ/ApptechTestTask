import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  console.log(props);
  const waitingTime = () => {
    const result = Math.ceil((120 / (((Number(props.data.firstInstallment)
      + (6 * Number(props.data.monthlyInstallment))) * 10000)
      / (Number(props.data.summ) *
        Number(props.data.term)))));
    return (Number.isNaN(result)) ? null : result;
  };
  const correctMohth = () => {
    if (waitingTime() === 1) {
      return 'месяц';
    } else if (waitingTime() < 4) {
      return 'месяца';
    }
    return 'месяцев';
  };
  return (
    <div>
      <h1>примерное время ожидания составит:</h1>
      <span>{waitingTime()} {correctMohth()}</span>
      <Link to="/" className="options optionsBtn"> Пересчитать</Link >
      <button className="options optionsBtn">Сохранить в PDF</button>
    </div>
  );
};
