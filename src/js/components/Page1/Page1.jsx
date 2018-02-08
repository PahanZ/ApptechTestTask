import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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


Page1.propTypes = {
  data: PropTypes.shape({
    Entries: PropTypes.string,
  }).isRequired,
  program: PropTypes.string.isRequired,
  setProgram: PropTypes.func.isRequired,
  choiceParams: PropTypes.func.isRequired,
};


export default (connect(mapStateToProps, mapDispatchToProps)(Page1));
