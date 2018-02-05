const setProgram = data => (dispatch) => {
  dispatch({
    type: 'setProgram',
    payload: data,
  });
};

const choice = (summ, term) => (dispatch) => {
  dispatch({
    type: 'choiceParams',
    payload: summ,
    payload2: term,
  });
};

export { setProgram, choice };
