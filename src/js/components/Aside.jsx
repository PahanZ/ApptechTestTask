import React from 'react';

export default (props) => {
  console.log(props);
  const max = () => {
    if (props.program === 'Авто') {
      return '60';
    } else if (props.program === 'Недвижимость') {
      return '120';
    }
    return '6';
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
      />
      <button
        onClick={(event) => {
        event.preventDefault();
          console.log(document.querySelectorAll('input.options')[0].value);
          console.log(document.querySelectorAll('input.options')[1].value);
          props.choiceParams(document.querySelectorAll('input.options')[0].value, document.querySelectorAll('input.options')[1].value);
          console.log(props);
      }}
        className="options optionsBtn"
      >Далее
      </button>
    </aside>
  );
};

