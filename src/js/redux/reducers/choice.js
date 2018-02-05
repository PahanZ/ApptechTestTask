import choiceParams from '../constants';

const obj = {
  summ: '0',
  term: '0',
};

export default (state = obj, action) => {
  if (action.type === choiceParams) {
    return {
      ...state,
      summ: action.payload,
      term: action.payload2,
    };
  }
  return state;
};
