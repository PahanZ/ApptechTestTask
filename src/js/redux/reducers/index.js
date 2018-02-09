import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import setProgram from './setProgram';
import choiceParams from './choiceParams';
import setFirstInstallment from './setFirstInstallment';
import setMonthlyInstallment from './setMonthlyInstallment';

export default combineReducers({
  setProgram, choiceParams, setFirstInstallment, setMonthlyInstallment, router: routerReducer,
});
