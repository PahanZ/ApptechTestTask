import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import Main from './Main';

const Page3 = props => (
  <Fragment>
    <Header />
    <Main
      program={props.program}
      data={props.data}
    />
  </Fragment>
);

const mapStateToProps = state => ({
  program: state.setProgram,
  data: state.choiceParams,
});

Page3.propTypes = {
  program: PropTypes.string.isRequired,
  data: PropTypes.shape({
    Entries: PropTypes.string,
  }).isRequired,
};

export default (connect(mapStateToProps)(Page3));
