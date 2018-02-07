import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Main from './Main';
import { setFirstInstallment, setMonthlyInstallment, choiceStrategy } from '../../redux/actions';

const Page2 = (props) => {
  // console.log(props);
  return (
    <Fragment>
      <Header />
      <Main
        program={props.program}
        data={props.data}
        firstInstallment={props.firstInstallment}
        monthlyInstallment={props.monthlyInstallment}
        setFirstInstallment={props.setFirstInstallment}
        setMonthlyInstallment={props.setMonthlyInstallment}
        choiceStrategy={props.choiceStrategy}
      />
    </Fragment>
  );
};


const mapStateToProps = state => ({
  program: state.setProgram,
  data: state.choiceParams,
  firstInstallment: state.setFirstInstallment,
  monthlyInstallment: state.setMonthlyInstallment,
});

const mapDispatchToProps = {
  setFirstInstallment,
  setMonthlyInstallment,
  choiceStrategy,
};


export default (connect(mapStateToProps, mapDispatchToProps)(Page2));
