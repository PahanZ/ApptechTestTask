import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Content from './Content';
import Aside from './Aside';
import { setFirstInstallment, setMonthlyInstallment, choiceStrategy } from '../../redux/actions';

const Main = props => (
  <main className="main">
    <Aside
      program={props.program}
      data={props.data}
      firstInstallment={props.firstInstallment}
      monthlyInstallment={props.monthlyInstallment}
    />
    <Content
      data={props.data}
      firstInstallment={props.firstInstallment}
      monthlyInstallment={props.monthlyInstallment}
      setFirstInstallment={props.setFirstInstallment}
      setMonthlyInstallment={props.setMonthlyInstallment}
      choiceStrategy={props.choiceStrategy}
    />
  </main>
);

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

Main.propTypes = {
  data: PropTypes.shape({
    Entries: PropTypes.string,
  }).isRequired,
  program: PropTypes.string.isRequired,
  firstInstallment: PropTypes.string.isRequired,
  monthlyInstallment: PropTypes.string.isRequired,
  setFirstInstallment: PropTypes.func.isRequired,
  setMonthlyInstallment: PropTypes.func.isRequired,
  choiceStrategy: PropTypes.func.isRequired,
};

export default (connect(mapStateToProps, mapDispatchToProps)(Main));

