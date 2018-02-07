import { choiceParams, choiceStrategy } from '../constants';

const initialState = {
  summ: '100',
  term: '1',
};

export default (state = initialState, action) => {
  if (action.type === choiceParams) {
    return {
      ...state,
      summ: action.payload,
      term: action.payload2,
    };
  }
  if (action.type === choiceStrategy) {
    return {
      ...state,
      firstInstallment: action.payload,
      monthlyInstallment: action.payload2,
    };
  }
  return state;
};
