import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Aside = (props) => {
  const max = () => {
    if (props.program === 'Авто') {
      return 60;
    } else if (props.program === 'Недвижимость') {
      return 120;
    }
    return 6;
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
        min="6"
        max={max()}
        placeholder="Срок займа, мес"
        // pattern="\d [0-9]"
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
  setProgram: PropTypes.func.isRequired,
  choiceParams: PropTypes.func.isRequired,
};


export default Aside;

