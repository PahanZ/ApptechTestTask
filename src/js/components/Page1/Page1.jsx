import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Main from './Main';
import { setProgram, choiceParams } from '../../redux/actions';

const Page1 = props => (
  <Fragment>
    <Header />
    <Main
      program={props.program}
      setProgram={props.setProgram}
      choiceParams={props.choiceParams}
      params={props.data}
    />
  </Fragment>
);

const mapStateToProps = state => ({
  program: state.setProgram,
  data: state.choiceParams,
});

const mapDispatchToProps = {
  setProgram,
  choiceParams,
};

export default (connect(mapStateToProps, mapDispatchToProps)(Page1));
