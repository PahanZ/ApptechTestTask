import { combineReducers } from 'redux';
import setProgram from './setProgram';
import choice from './choice';

export default combineReducers({
  setProgram, choice,
});
