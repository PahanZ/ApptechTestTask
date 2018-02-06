import { choiceParams } from '../constants';

export default (state = {}, action) => {
  if (action.type === choiceParams) {
    return {
      ...state,
      summ: action.payload,
      term: action.payload2,
    };
  }
  return state;
};
