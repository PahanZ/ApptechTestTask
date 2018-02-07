import { choiceParams, choiceStrategy } from '../constants';

export default (state = {}, action) => {
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
