import { setFirstInstallment } from '../constants';

export default (state = '', action) => {
  if (action.type === setFirstInstallment) {
    return action.payload;
  }
  return state;
};
