import { setFirstInstallment } from '../constants';

export default (state = '100', action) => {
  if (action.type === setFirstInstallment) {
    return action.payload;
  }
  return state;
};
