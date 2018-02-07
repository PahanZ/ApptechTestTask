import { setMonthlyInstallment } from '../constants';

export default (state = '100', action) => {
  if (action.type === setMonthlyInstallment) {
    return action.payload;
  }
  return state;
};
