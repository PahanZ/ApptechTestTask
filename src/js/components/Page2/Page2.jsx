import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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


Page2.propTypes = {
  program: PropTypes.string.isRequired,
  data: PropTypes.shape({
    Entries: PropTypes.string,
  }).isRequired,
  firstInstallment: PropTypes.string.isRequired,
  monthlyInstallment: PropTypes.string.isRequired,
  setFirstInstallment: PropTypes.func.isRequired,
  setMonthlyInstallment: PropTypes.func.isRequired,
  choiceStrategy: PropTypes.func.isRequired,
};

export default (connect(mapStateToProps, mapDispatchToProps)(Page2));
