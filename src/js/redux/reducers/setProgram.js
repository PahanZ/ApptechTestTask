import { setProgram } from '../constants';

export default (state = '', action) => {
  if (action.type === setProgram) {
    return action.payload;
  }
  return state;
};
