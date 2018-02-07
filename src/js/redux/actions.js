const setProgram = data => (dispatch) => {
  dispatch({
    type: 'setProgram',
    payload: data,
  });
};

const choiceParams = (summ, term) => (dispatch) => {
  dispatch({
    type: 'choiceParams',
    payload: summ,
    payload2: term,
  });
};

const setFirstInstallment = data => (dispatch) => {
  dispatch({
    type: 'setFirstInstallment',
    payload: data,
  });
};

const setMonthlyInstallment = data => (dispatch) => {
  dispatch({
    type: 'setMonthlyInstallment',
    payload: data,
  });
};

const choiceStrategy = (firstInstallment, monthlyInstallment) => (dispatch) => {
  dispatch({
    type: 'choiceStrategy',
    payload: firstInstallment,
    payload2: monthlyInstallment,
  });
};

export { setProgram, choiceParams, setFirstInstallment, setMonthlyInstallment, choiceStrategy };
