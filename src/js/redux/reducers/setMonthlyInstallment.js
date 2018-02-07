import { setMonthlyInstallment } from '../constants';

export default (state = '', action) => {
  if (action.type === setMonthlyInstallment) {
    return action.payload;
  }
  return state;
};
