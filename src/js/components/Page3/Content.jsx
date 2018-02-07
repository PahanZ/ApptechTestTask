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
    <div className="content">
      <section>
        <h2>Примерное время ожидания составит:</h2>
        <span>{waitingTime()} {correctMohth()}</span>
      </section>
      <section>
        <h2>Рекомендации для уменьшения срока ожидания</h2>
        <ul>
          <li>Уменьшите срок займа;</li>
          <li>Увеличьте первоначальный и ежемесячный взносы;</li>
          <li>Участвуйте в специальных акциях для Пайщиков</li>
        </ul>
      </section>
      <section>
        <Link to="/" className="options optionsBtn">Перерасчет</Link >
        <button
          className="options optionsBtn"
          onClick={() => {
            window.print();
          }}
        >Сохранить в PDF
        </button>
      </section>
    </div>
  );
};
