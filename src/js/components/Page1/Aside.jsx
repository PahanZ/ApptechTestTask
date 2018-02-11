import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Aside = (props) => {
  const max = (event) => {
    const input = event;
    if (props.program === 'Авто' && event.currentTarget.value > 60) {
      input.currentTarget.value = 60;
    } else if (props.program === 'Недвижимость' && event.currentTarget.value > 120) {
      input.currentTarget.value = 120;
    }
  };
  return (
    <aside className="aside">
      <select
        onChange={(event) => {
          props.setProgram(event.currentTarget.value);
        }}
        className="options"
      >
        <option value="Выбор программы">Программа</option>
        <option value="Авто">Авто</option>
        <option value="Недвижимость">Недвижимость</option>
      </select>
      <input className="options" type="number" placeholder="Сумма займа, руб" />
      <input
        className="options"
        type="number"
        onChange={max}
        placeholder="Срок займа, мес"
      />
      <Link
        to="/Page2"
        onClick={() => {
          const inputs = document.querySelectorAll('input.options');
          if (inputs[0].value && inputs[1].value !== '') {
            props.choiceParams(inputs[0].value, inputs[1].value);
          }
        }}
        className="options optionsBtn"
      >Далее
      </Link>
    </aside>
  );
};

Aside.propTypes = {
  program: PropTypes.string.isRequired,
  setProgram: PropTypes.func.isRequired,
  choiceParams: PropTypes.func.isRequired,
};

export default Aside;

